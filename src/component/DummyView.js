const DummyView = (props) => {
    return(
        <div>
            <button onClick={props.onNavigate}>Go Back</button>
        </div>
    )
}

export default DummyView;