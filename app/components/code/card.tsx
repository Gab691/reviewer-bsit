'use client';

interface CodeCardProps {
    code?: string;
    language?: string;
    title?: string;
}

export default function CodeCard({ 
    code = 
    `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
    language = 'Java',
    title = 'Code Example'
}: CodeCardProps) {
    return (
        <aside className="bg-black text-white p-6 rounded-lg w-full max-w-150 font-mono">
            <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-sm">{language}</p>
            </div>
            <div className="mt-4">
                <div className="mt-2">
                    <h4 className="text-sm text-gray-400 mb-2">{title}</h4>
                    <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded">
                        <code>{code}</code>
                    </pre>
                </div>
            </div>
        </aside>
    )
}