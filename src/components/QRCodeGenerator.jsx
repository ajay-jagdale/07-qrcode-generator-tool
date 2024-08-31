import { useState } from 'react';
import QRCode from 'react-qr-code';

const QRCodeGenerator = () => {
    const [inputText, setInputText] = useState('');
    const [qrValue, setQRValue] = useState('');

    const generateQRCode = () => {
        setQRValue(inputText);
    };

    return (
        <div className="p-4 max-w-5xl mx-auto mt-[70px] mb-36">
            <div className="flex flex-row gap-2">
                <input
                    type="text"
                    id="default-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter text or URL"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button
                    onClick={generateQRCode}
                    className="p-4 rounded flex items-center justify-center h-12"
                >
                    <i className="bi bi-arrow-right-circle-fill text-3xl" style={{ color: '#1e40af' }}></i>
                </button>
            </div>
            {qrValue && (
                <div className="flex justify-center mt-11">
                    <QRCode
                        value={qrValue}
                        size={256}
                        bgColor={"#ffffff"}
                        fgColor={"#000000"}
                        level={"Q"}
                        includeMargin={true}
                    />
                </div>
            )}
        </div>
    );
};

export default QRCodeGenerator;
