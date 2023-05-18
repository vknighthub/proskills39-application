const CutText = ({ content, start, end }) => {
    if (content.length < end) {
        content = content + Array(end - content.length).fill('\xa0').join('')
    }
    var text = content.substring(start, end)
    return text
}
export default CutText;