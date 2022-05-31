import {store} from '../../store/store';

let ChooseLevel = () => {
    let onChangeValue = (e) => {
        store.changeLevel(e.target.value);
    };
    return (
        <div className="d-flex justify-content-center mt-3" onChange={onChangeValue}>
            {store.settings.map((item, idx) => (
                <div className="form-check me-3">
                    <input className="form-check-input" checked={idx == store.level} type="radio" value={idx}
                           name="level" id={`radioBtn${idx}`}/>
                    <label className="form-check-label" htmlFor={`radioBtn${idx}`}> {item.description} </label>
                </div>
            ))}
        </div>
    );
};
export {ChooseLevel};