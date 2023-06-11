const Form = () => {



    return (
        <form >
            <div>
                <label>Name</label>
                <input type="text"></input>
                <label>Life</label>
                <input type="number" min={min} max={max}></input>
                <label>Stroke</label>
                <input type="text"></input>
                <label>Defending</label>
                <input type="text"></input>
                <label>Speed</label>
                <input type="text"></input>
                <label>Height</label>
                <input type="text"></input>
                <label>Weight</label>
                <input type="text"></input>
                <label>Type</label>
                <select name="type" id="">
                    <option>Seleccionar Tipo</option>
                </select>
            </div>
        </form>
    );

}

export default Form;