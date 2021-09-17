export default function Button() {
    logMessage() {
        console.log('logging message')
    }
    
    return (
        <a
            href="#"
            onClick={logMessage()}
        >Hello world</a>
    )
}