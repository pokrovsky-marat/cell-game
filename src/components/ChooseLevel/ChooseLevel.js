import {store} from '../../store/store';

let ChooseLevel = () => {
    let onChangeValue = (e) => {
        store.changeLevel(e.target.value);
    };
    return (
        <div className='d-flex justify-content-center mt-3' onChange={onChangeValue}>
            <div className="form-check me-3">
                <input className="form-check-input" type="radio" value="0" name="level" id="radioBtn0"/>
                <label className="form-check-label" htmlFor="radioBtn0"> Лёгкий </label>
            </div>
            <div className="form-check me-3">
                <input className="form-check-input" type="radio" value="1" name="level" id="radioBtn1"/>
                <label className="form-check-label" htmlFor="radioBtn1"> Нормальный </label>
            </div>
            <div className="form-check me-3">
                <input className="form-check-input" type="radio" value="2" name="level" id="radioBtn2"/>
                <label className="form-check-label" htmlFor="radioBtn2"> Средний </label>
            </div>
            <div className="form-check me-3">
                <input className="form-check-input" type="radio" value="3" name="level" id="radioBtn3"/>
                <label className="form-check-label" htmlFor="radioBtn3"> Сложный </label>
            </div>
            <div className="form-check me-3">
                <input className="form-check-input" type="radio" value="4" name="level" id="radioBtn4"/>
                <label className="form-check-label" htmlFor="radioBtn4"> Очень сложный </label>
            </div>
        </div>
    );
};
export {ChooseLevel};