import {store} from '../../store/store';

let ChooseLevel = () => {
    let onChangeValue = (e) => {
        store.changeLevel(e.target.value);
    };
    return (
        <div className="d-flex justify-content-center mt-3">
            {store.settings.map((item, idx) => (
                <div key={idx} className="form-check me-3">
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