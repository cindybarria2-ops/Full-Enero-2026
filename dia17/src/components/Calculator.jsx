import { useState } from "react";
export default function Calculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");
    const handleCalculate = (operation) => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);
        let calculationResult;
        switch (operation) {
            case "add":
                calculationResult = number1 + number2;
                break;
            case "subtract":
                calculationResult = number1 - number2;
                break;
            case "multiply":
                calculationResult = number1 * number2;
                break;
            case "divide":
                calculationResult = number1 / number2;
                break;
            default:
                calculationResult = "Operación no válida";
        }   setResult(calculationResult);
    };
    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-orange-500 text-xl font-bold mb-4">Calculadora</h2>
            <input
                className="text-orange-500 border-orange-500 border-2 rounded-md p-2 mb-4 w-full"
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="Número 1"
            />
            <input
                className="text-orange-500 border-orange-500 border-2 rounded-md p-2 mb-4 w-full"
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="Número 2"
            />
            <div>
                <button className="bg-green-400 text-white px-4 py-2 rounded-md mr-2" onClick={() => handleCalculate("add")}>Sumar</button>
                <button className="bg-red-400 text-white px-4 py-2 rounded-md mr-2" onClick={() => handleCalculate("subtract")}>Restar</button>
                <button className="bg-blue-400 text-white px-4 py-2 rounded-md mr-2" onClick={() => handleCalculate("multiply")}>Multiplicar</button>
                <button className="bg-yellow-400 text-white px-4 py-2 rounded-md mr-2" onClick={() => handleCalculate("divide")}>Dividir</button>
            </div>
            <h3 className="text-orange-500 mt-4 text-lg font-semibold">Resultado: {result}</h3>
        </div>
    );
}