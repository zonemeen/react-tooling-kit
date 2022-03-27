export const CodeBlock = ({ code }) => {
  return (
    <pre className="border rounded-lg p-3 overflow-auto">
      <code className="break-all whitespace-pre-wrap">{code}</code>
    </pre>
  )
}
