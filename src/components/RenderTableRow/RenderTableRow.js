import Cell from '../Cell/cell';
import './RenderTableRow.css';
import {observer} from 'mobx-react';

const RenderTableRow = observer((props) => {
    return (
        <div className="render-table-row">
            {props.row.map(item => (<Cell key={item.id}
                                          {...item}/>))}
        </div>
    );
});
export default RenderTableRow;