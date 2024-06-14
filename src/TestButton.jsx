export default function TestButton () {
    function handleClick() {
        alert('You clicked me!')
    }
    let handleClicker = () => {
        alert('This is an arrow function!')
    }
    return (
        <>
        <button onClick={handleClick}>
            I don't do anything
        </button>

        <button onClick={handleClicker}>
            I also don't do anything
        </button>
        </>
    );
}