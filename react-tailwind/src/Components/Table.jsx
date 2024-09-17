function Table() {
  return (
    <>
      <table className="border-collapse border border-slate-500">
        <thead>
          <tr>
            <th className="border border-slate-600">Language</th>
            <th className="border border-slate-600">Framework</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-green-300">javaScript</td>
            <td className="border border-green-300">React JS</td>
          </tr>
          <tr>
            <td className="border border-yellow-500">Python</td>
            <td className="border border-yellow-500">Flask</td>
          </tr>
          <tr>
            <td className="border border-red-800">PHP</td>
            <td className="border border-red-800">Laravel</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Table; 