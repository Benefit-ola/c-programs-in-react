import { useState } from "react";

const operations = [
  { value: "+", label: "Addition",       symbol: "+" },
  { value: "-", label: "Subtraction",    symbol: "−" },
  { value: "*", label: "Multiplication", symbol: "×" },
  { value: "/", label: "Division",       symbol: "÷" },
];

const StepCard = ({ step, title, content }) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#D63384] text-white text-xs font-bold flex items-center justify-center mt-0.5">
      {step}
    </div>
    <div>
      <p className="text-sm font-semibold text-gray-800 mb-0.5">{title}</p>
      <p className="text-sm text-gray-500 font-mono leading-relaxed">{content}</p>
    </div>
  </div>
);

export default function Calculator() {
  const [num1, setNum1]         = useState("");
  const [num2, setNum2]         = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult]     = useState(null);
  const [error, setError]       = useState("");

  const opObj = operations.find((o) => o.value === operator);

  const calculate = () => {
    setError("");
    setResult(null);
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) { setError("Please enter valid numbers."); return; }
    if (operator === "/" && b === 0) { setError("Cannot divide by zero."); return; }
    const map = { "+": a + b, "-": a - b, "*": a * b, "/": a / b };
    setResult(map[operator]);
  };

  const getSteps = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b) || result === null) return null;
    const opLabel = opObj?.label ?? "";
    const opSym   = opObj?.symbol ?? operator;
    const steps = [
      { title: "Read inputs",     content: `a = ${a},  b = ${b}` },
      { title: "Choose operation",content: `operator = "${operator}" → ${opLabel}` },
      { title: "Compute result",  content: `${a} ${opSym} ${b} = ${result}` },
      { title: "Print result",    content: `printf("Result = %.2f", ${result.toFixed(2)})` },
    ];
    return steps;
  };

  const steps = getSteps();

  return (
    <div className="min-h-screen bg-[#fdfcfb] px-4 py-12 md:px-8">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-8 bg-[#D63384]" />
            <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#D63384]">
              C → React Project
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-3">
            Basic <span className="text-[#D63384]">Calculator</span>
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
            Originally written in C using{" "}
            <code className="text-[#D63384] bg-pink-50 px-1.5 py-0.5 rounded text-xs">printf</code>{" "}
            /{" "}
            <code className="text-[#D63384] bg-pink-50 px-1.5 py-0.5 rounded text-xs">scanf</code>{" "}
            and a{" "}
            <code className="text-[#D63384] bg-pink-50 px-1.5 py-0.5 rounded text-xs">switch</code>{" "}
            statement. Reimagined as an interactive React app with live step-by-step working.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT */}
          <div className="flex flex-col gap-6">

            {/* inputs */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-5">
                Enter Values
              </h2>

              <div className="flex flex-col gap-3 mb-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-widest">
                    First number (a)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 10"
                    value={num1}
                    onChange={(e) => { setNum1(e.target.value); setResult(null); setError(""); }}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 font-medium text-sm focus:outline-none focus:border-[#D63384] focus:ring-2 focus:ring-[#D63384]/20 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-widest">
                    Operator
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {operations.map((op) => (
                      <button
                        key={op.value}
                        onClick={() => { setOperator(op.value); setResult(null); setError(""); }}
                        className={`py-2.5 rounded-xl text-base font-bold transition-all duration-200 ${
                          operator === op.value
                            ? "bg-[#D63384] text-white shadow-md shadow-pink-200"
                            : "bg-gray-50 text-gray-600 border border-gray-200 hover:border-[#D63384] hover:text-[#D63384]"
                        }`}
                      >
                        {op.symbol}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-widest">
                    Second number (b)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 5"
                    value={num2}
                    onChange={(e) => { setNum2(e.target.value); setResult(null); setError(""); }}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 font-medium text-sm focus:outline-none focus:border-[#D63384] focus:ring-2 focus:ring-[#D63384]/20 transition-all"
                  />
                </div>
              </div>

              {/* live expression preview */}
              <div className="bg-gray-50 rounded-xl px-4 py-3 border-l-4 border-[#D63384] font-mono text-sm text-gray-700 mb-5">
                {num1 || "a"} {opObj?.symbol} {num2 || "b"} = ?
              </div>

              <button
                onClick={calculate}
                className="w-full py-3.5 rounded-full bg-[#D63384] text-white text-sm font-semibold hover:bg-[#b02670] transition-colors duration-300 shadow-md shadow-pink-200"
              >
                Calculate
              </button>
            </div>

            {/* result */}
            {(result !== null || error) && (
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">
                  Result
                </h2>
                {error ? (
                  <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl">
                    {error}
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Answer</p>
                    <p className="text-5xl font-extrabold text-[#D63384]">
                      {typeof result === "number" ? parseFloat(result.toFixed(6)) : result}
                    </p>
                    <p className="text-xs text-gray-400 font-mono mt-3">
                      {num1} {opObj?.symbol} {num2} = {result}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* step by step */}
            {steps && (
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-5">
                  Step-by-step
                </h2>
                <div className="flex flex-col gap-5">
                  {steps.map((s, i) => (
                    <StepCard key={i} step={i + 1} title={s.title} content={s.content} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6">

            {/* operations info */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">
                Operations
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {operations.map((op) => (
                  <div
                    key={op.value}
                    className={`p-4 rounded-xl border text-center transition-all ${
                      operator === op.value
                        ? "border-[#D63384] bg-pink-50"
                        : "border-gray-100 bg-gray-50"
                    }`}
                  >
                    <p className={`text-2xl font-bold mb-1 ${operator === op.value ? "text-[#D63384]" : "text-gray-400"}`}>
                      {op.symbol}
                    </p>
                    <p className="text-xs text-gray-500">{op.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* original C code */}
            <div className="bg-gray-950 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                  Original C code
                </h2>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-gray-800 text-gray-400 border border-gray-700">
                  C language
                </span>
              </div>
              <pre className="text-xs text-gray-300 leading-relaxed overflow-x-auto font-mono whitespace-pre">
{`#include <stdio.h>

int main() {
  double a, b, result;
  char op;

  printf("Enter: num1 op num2: ");
  scanf("%lf %c %lf", &a, &op, &b);

  switch (op) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/':
      if (b == 0) {
        printf("Cannot divide by zero\\n");
        return 1;
      }
      result = a / b;
      break;
    default:
      printf("Invalid operator\\n");
      return 1;
  }

  printf("Result = %.2lf\\n", result);
  return 0;
}`}
              </pre>
            </div>

            {/* what this demonstrates */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">
                What this demonstrates
              </h2>
              <div className="flex flex-col gap-3">
                {[
                  { icon: "⚙️", text: "C programming — scanf, printf, switch statement" },
                  { icon: "🔀", text: "Control flow — switch/case with break" },
                  { icon: "🛡️", text: "Input validation — division by zero handling" },
                  { icon: "⚛️", text: "React — useState, controlled inputs, events" },
                  { icon: "🎨", text: "UI design — Tailwind CSS, responsive layout" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3 text-sm text-gray-500">
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-xs text-gray-400">
          Built by <span className="text-[#D63384] font-medium">Faidat Olawuyi</span> · C Programs in React
        </div>
      </div>
    </div>
  );
}
