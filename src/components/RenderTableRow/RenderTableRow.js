import Cell from '../Cell/cell';
import './RenderTableRow.css';

const RenderTableRow = (props) => {
    return (
        <div className="render-table-row">
            {props.row.map(item => (<Cell key={item.id}
                                          {...item}/>))}
        </div>
    );
};
export default RenderTableRow;