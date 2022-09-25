const SplitText = (text, role) => {
    return (
        <div>
            <span aria-label={text} role={role}>
                {text.text.split("").map(function (char, index) {
                    return (
                        <span aria-hidden="true" key={index}>
                            {char}
                        </span>
                    )
                })}
            </span>
        </div>
    )
}
export default SplitText
