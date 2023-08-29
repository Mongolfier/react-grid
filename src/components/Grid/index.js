import RGL, { WidthProvider } from "react-grid-layout";
import cls from './style.module.css';

const ReactGridLayout = WidthProvider(RGL);


const layout = [
    { i: "test", x: 0, y: 0, w: 1, h: 1},
    { i: "test 2", x: 1, y: 0, w: 1, h: 1},
    { i: "test 3", x: 1, y: 1, w: 1, h: 1},
    { i: "test 4", x: 3, y: 0, w: 1, h: 1}
]

const Grid = () => {
    const onResize = (layout, oldLayoutItem, layoutItem, placeholder) => {
        // `oldLayoutItem` contains the state of the item before the resize.
        // You can modify `layoutItem` to enforce constraints.
    
        if (layoutItem.h < 3 && layoutItem.w > 2) {
          layoutItem.w = 2;
          placeholder.w = 2;
        }
    
        if (layoutItem.h >= 3 && layoutItem.w < 2) {
          layoutItem.w = 2;
          placeholder.w = 2;
        }
      }

    return (
        <ReactGridLayout
            onLayoutChange={() => {}}
            onResize={onResize}
            isDraggable={true}
            isResizable={true}
            cols={12}
            layout={layout}
        >
            <div key="test">test</div>
            <div key="test 2">test 2</div>
            <div key="test 3">test 3</div>
            <div key="test 4">test 4</div>
        </ReactGridLayout>
    )
}

export default Grid;