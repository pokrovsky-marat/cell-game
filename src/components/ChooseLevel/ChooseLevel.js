import {useContext} from 'react';
import {StoreContext} from '../StoreProvider/StoreProvider';

let ChooseLevel = ({settings}) => {
    let store = useContext(StoreContext);
    let onChangeValue = (e) => {
        store.changeLevel(e.target.value);
    };
    return (
        <div className="align-items-center d-flex flex-column flex-sm-row justify-content-center mt-3 mb-3">
            {settings.map((item, idx) => (
                <div key={idx} className=" form-check me-sm-3">
                    <input className="form-check-input" onChange={onChangeValue} checked={+idx === +store.level}
                           type="radio" value={idx}
                           name="level" id={`radioBtn${idx}`}/>
                    <label className="form-check-label" htmlFor={`radioBtn${idx}`}> {item.description} </label>
                </div>
            ))}
        </div>
    );
};
export {ChooseLevel};