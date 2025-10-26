'use client';

import { BookOpen, Cpu, Network, History, Wrench, Calculator, Computer, MonitorCog, Cable, Code } from 'lucide-react';
import CodeCard from '../code/card';

const introToProgramming = [
      {
        id: 'introToProgramming',
        title: 'Introduction to Programming',
        icon: Code,
        content: [
          {
            subtitle: 'Fundamentals of Java',
            items: [
                'Java is a high-level, object-oriented, platform-independent programming language.',
                'Created by James Gosling (Sun Microsystems, 1995).',
                'Motto: “Write once, run anywhere (WORA)” — runs on the Java Virtual Machine (JVM).',
                'Java Features:',
                '  • Object-Oriented',
                '  • Platform-Independent',
                '  • Multi-threaded',
                '  • Simple and Secure',
                '  • Robust and Portable',
                '  • Distributed',
                '  • High Performance (via JIT Compiler)',
                <div>
                  <p className='m-2 p-1'><b><i><a className='hover:border-b-2 hover:border-gray-400 cursor-pointer text-slate-700' href='https://www.java.com/en/' target="_blank">Visit Java Official Website</a></i></b></p>
                  <p className='m-2 p-1'><b><i><a className='hover:border-b-2 hover:border-gray-400 cursor-pointer text-slate-700' href='https://www.youtube.com/watch?v=3qC3MdyyXeY' target="_blank">Tutorial Video On How To Install Java</a></i></b></p>
                </div>
            ]    
          },
          {
            subtitle: 'Basic Syntax',
            items: [
              'Here are some Java code examples:',
              <div key="hello-world-card" className="card pl-5">
                <CodeCard 
                  title="Hello World Example"
                  language="Java"
                  code={` public class Main {
    public static void main(String[] args) {
         System.out.println("Hello, World!");
      }
  }`}
                />
              </div>,
            ]
          },
          {
            subtitle: 'Main Method',
            items: [
              'The main method is the entry point of a Java program:',
              '   - The starting point of the program execution.',
              '   - The first method that is called when the program starts.',
              '   - The only method that is required to be present in a Java program.',
              'Entry point of Java program:',
              <div key="hello-world-card" className="card pl-5">
                <CodeCard 
                  title="Main Method Example"
                  language="Java"
                  code={`public static void main(String[] args)`}
                />
              </div>, 
              'Consisting of: ',
              <div className="card pl-8" style={{marginTop: '-2rem'}}>
                <ul className="list-disc p-3 text-slate-500" >
                  <li className='p-2'><b>Public</b> : accessible to JVM</li>
                  <li className='p-2'><b>Static</b> : belongs to the class, not the object</li>
                  <li className='p-2'><b>Void</b> : no return value</li>
                  <li className='p-2'><b>Main</b> : name of the method</li>
                  <li className='p-2'><b>String[] args</b> : command line arguments</li>
                </ul>
              </div>,
            ]
          },
          {
            subtitle: 'Variables',
            items: [
              'Variables are used to store data values.',
              'There are three types of variables:',
              <div className="card pl-8 mt-2" style={{marginTop: '-2rem'}}>
                <ul className="list-disc p-3 text-slate-500" >
                  <li className='p-2'><b>Local Variables</b> : accessible to JVM</li>
                  <li className='p-2'><b>Instance Variables</b> : belongs to the object</li>
                  <li className='p-2'><b>Class Variables</b> : belongs to the class</li>
                </ul>
              </div>,
              'Data types: ',
              <div className="card pl-8 text-slate-500" style={{marginTop: '-2\rem'}}>
                <span><h1>In Java, data types specify the type and size of data that a variable can hold.
                They help the compiler allocate memory and prevent invalid data operations.</h1></span>
                <br></br>
                <p>1. Primitive Data Types</p>
                <p><i>These are the basic built-in types in Java. There are 8 primitive data types.</i></p>
                <ul className="list-disc p-3">
                  <li className='p-2'><b>boolean</b> : 1-bit, True or false (<b>example:</b> 1, 0 in binary)</li>
                  <li className='p-2'><b>byte</b> : 8-bit / 1 byte, Stores whole numbers from -128 to 127</li>
                  <li className='p-2'><b>char</b> : 16-bit / 2 byte, Single character (<b>example:</b> 'A', 'B', 'C')</li>
                  <li className='p-2'><b>short</b> : 16-bit / 2 byte, Stores whole numbers from -32,768 to 32,767</li>
                  <li className='p-2'><b>int</b> : 32-bit / 4 byte, Stores whole numbers, commonly used for integers</li>
                  <li className='p-2'><b>float</b> : 32-bit / 4 byte, Stores decimal numbers, single precision, real numbers (<b>example:</b> currency 4.55 pesos)</li>
                  <li className='p-2'><b>long</b> : 64-bit / 8 byte, Very large integers, long integers, ( <b>example:</b> 12 telephone numbers)</li>
                  <li className='p-2'><b>double</b> : 64-bit / 8 byte, Double-precision floating-point numbers (<b>example:</b> gpa 4.5870)</li>
                </ul>
                <p className='p-2'>2. Non-Primitive Data Types</p>
                <p className='p-2'><i>These types are created by the programmer and refer to objects.</i></p>
                <ul className="list-disc p-3">
                  <li className='p-2'><b>String</b> : Stores text or characters or sequence of characters ( <b>example:</b> Juan Dela Cruz.) <i className='text-sm'>Note: Must be inside a quotation mark " " / ' '</i></li>
                  <li className='p-2'><b>Array</b> : Stores multiple values of the same type or collection of similar data types</li>
                  <li className='p-2'><b>Class</b> : Stores custom data types or blueprint for objects (<b>example:</b> Student, Car. A real world scenario)</li>
                  <li className='p-2'><b>Interface</b> : Stores method signatures</li>
                  <li className='p-2'><b>Object</b> : Root of all classes in Java</li>
                </ul>
                <p>Why Data Types Are Important in Java</p>
                <p>: <b>Memory Management</b> – Ensures efficient use of memory based on data size.</p>
                <p>: <b>Data Safety</b> – Prevents invalid data operations (e.g., dividing a string by a number).</p>
                <p>: <b>Code Clarity</b> – Makes programs easier to read and understand.</p>
                <p>: <b>Performance</b> – Optimizes execution speed by defining how data is stored and processed.</p>
              </div>,
              <p className='pl-5'><b>Primitive Data Types:</b></p>,      
              <div key="local-variables-card" className="card pl-5">
                <CodeCard 
                  title="Local Variables 'Boolean / Bool'Example"
                  language="Java"
                  code={`boolean isJavaFun = true;`}
                />
              </div>, 
              <div key="local-variables-card" className="card pl-5">
                <CodeCard 
                  title="Local Variables 'Byte / Bytes'Example"
                  language="Java"
                  code={`byte a = 255; // maximum value of byte`}
                />
              </div>,
              <div key="local-variables-card" className="card pl-5">
                <CodeCard 
                  title="Local Variables 'Char / Characters'Example"
                  language="Java"
                  code={`char letter = 'A';`}
                />
              </div>,
              <div key="local-variables-card" className="card pl-5">
                <CodeCard 
                  title="Local Variables 'Short / Shorts'Example"
                  language="Java"
                  code={`short maximumShort = 32767; // maximum value of short`}
                />
              </div>,
              <div key="local-variables-card" className="card pl-5">
                <CodeCard 
                  title="Local Variables 'Int / Integers'Example"
                  language="Java"
                  code={`int maximumInt= 2147483647; // maximum value of int`}
                />
              </div>,
              <div key="local-variables-card" className="card pl-5">
                <CodeCard 
                  title="Local Variables 'Long / Longs'Example"
                  language="Java"
                  code={`long maximumLong = 9223372036854775807; // maximum value of long`}
                />
              </div>,
              <div key="local-variables-card" className="card pl-5">
                <CodeCard 
                  title="Local Variables 'Float / Floats'Example"
                  language="Java"
                  code={`float pi = 3.14159f; // Do not forget the 'f' at the end if using float`}
                />
              </div>,
              <div key="local-variables-card" className="card pl-5">
                <CodeCard 
                  title="Local Variables 'Double / Doubles'Example"
                  language="Java"
                  code={`double dollar = 100.50;`}
                />
              </div>,
              <p className='pl-5'><b>Non-Primitive Data types:</b></p>,
              <div key="local-variables-card" className="card pl-5">
                <CodeCard 
                  title="Local Variables 'String / Strings'Example"
                  language="Java"
                  code={`String name = "Juan Dela Cruz";`}
                />
              </div>,
              <div key="local-variables-card" className="card pl-5">
                <CodeCard 
                  title="Local Variables 'Array / Arrays'Example"
                  language="Java"
                  code={`int[] numbers = {1, 2, 3, 4, 5};`}
                />
              </div>, 
              <div key="local-variables-card" className="card pl-5">
                <CodeCard 
                  title="Local Variables 'String / Strings'Example"
                  language="Java"
                  code={`String name = "Juan Dela Cruz";`}
                />
              </div>,
              <div key="local-variables-card" className="card pl-5">
                <CodeCard 
                  title="Local Variables 'Class / Classes'Example"
                  language="Java"
                  code={`class Student {
      string name = "Juan Dela Cruz";
      int age = 20;
      boolean isEnrolled = true;
  }`}
                />
              </div>,
              <div key="local-variables-card" className="card pl-5">
                <CodeCard 
                  title="Local Variables 'Interface / Interfaces'Example"
                  language="Java"
                  code={`interface yourInterfaceName {
      void yourMethod(); 
      // abstract method, best used when using OOP 
      // or Object Oriented Programming, 
      // in short using classes and objects lmao.
      // suitable for real world scenarios.
      // add more methods or variables if needed. 
    }`}
                />
              </div>,  
              <div key="local-variables-card" className="card pl-5">
                <CodeCard 
                  title="Local Variables 'Object / Objects'Example"
                  language="Java"
                  code={`Object yourObjectName = new yourClassName();`}
                />
              </div>,   
              'Now we are done with Data Types. Maka buang noh.',
              'Operators:',
              <div className="card pl-8 text-slate-500" style={{marginTop: '-2\rem'}}>
                <span>
                <h1 className='p-2'>In Java, operators are special symbols that perform operations on variables and values.
                They are used to manipulate data, perform calculations, and make decisions in a program.</h1>
                </span>
                <br></br>
                <p className='p-2'>1. Arithmetical Operators</p>
                <p className='p-2'><i>Used to perform basic mathematical operations.</i></p>
                <ul className="list-disc p-3">
                  <li className='p-2'><b>+ </b> : Adds two values</li>
                  <li className='p-2'><b>- </b> : Subtracts two values</li>
                  <li className='p-2'><b>* </b> : Multiplies two values</li>
                  <li className='p-2'><b>/ </b> : Divides two values</li>
                  <li className='p-2'><b>% </b> : Returns the remainder of a division operation</li>
                </ul>
                <p>2. Relational (Comparison) operators</p>
                <p><i>Used to compare values and return a boolean result.</i></p>
                <ul className="list-disc p-3">
                  <li className='p-2'><b>== </b> : Checks if two values are equal</li>
                  <li className='p-2'><b>!= </b> : Checks if two values are not equal</li>
                  <li className='p-2'><b>&gt; </b> : Checks if a value is greater than another value</li>
                  <li className='p-2'><b>&lt; </b> : Checks if a value is less than another value</li>
                  <li className='p-2'><b>&gt;= </b> : Checks if a value is greater than or equal to another value</li>
                  <li className='p-2'><b>&lt;= </b> : Checks if a value is less than or equal to another value</li>
                </ul>
                <p>3. Logical Operators</p>
                <p><i>Used to combine multiple conditions.</i></p>
                <ul className="list-disc p-3">
                  <li className='p-2'><b>&amp;&amp; </b> : Logical for AND</li>
                  <li className='p-2'><b>|| </b> : Logical for OR</li>
                  <li className='p-2'><b>! </b> : Logical for NOT</li>
                </ul>
                <p>4. Assignment Operators</p>
                <p><i>Used to assign values to variables.</i></p>
                <ul className="list-disc p-3">
                  <li className='p-2'><b>= </b> : Assigns a value to a variable</li>
                  <li className='p-2'><b>+= </b> : Adds a value to a variable and assigns the result to the variable</li>
                  <li className='p-2'><b>-= </b> : Subtracts a value from a variable and assigns the result to the variable</li>
                  <li className='p-2'><b>*= </b> : Multiplies a value by a variable and assigns the result to the variable</li>
                  <li className='p-2'><b>/= </b> : Divides a value by a variable and assigns the result to the variable</li>
                  <li className='p-2'><b>%= </b> : Returns the remainder of a division operation and assigns the result to the variable</li>
                </ul>
                <p>5. Increment/Decrement Operators</p>
                <p><i>Used to increment or decrement the value of a variable.</i></p>
                <ul className="list-disc p-3">
                  <li className='p-2'><b>++ </b> : Increments the value of a variable by 1</li>
                  <li className='p-2'><b>-- </b> : Decrements the value of a variable by 1</li>
                </ul>
              </div>,
              'Now we are done with Operators. Samot tag kabuang ani.',
              'Operators examples in code:',
              '1. Artihmetical Operators',
              <div key="local-variables-card" className="card pl-5">
                <CodeCard 
                  title="Arithmetical Operators Example"
                  language="Java"
                  code={`int a = 10;
int b = 20;
int sum = a + b; // addition
int difference = a - b; // subtraction
int product = a * b; // multiplication
int quotient = a / b; // division
int remainder = a % b; // modulus`}
                />
              </div>,
              '2. Relational (Comparison) Operators',
              <div key="local-variables-card" className="card pl-5">
                <CodeCard 
                  title="Relational (Comparison) Operators Example"
                  language="Java"
                  code={`int a = 10;
int b = 20;
boolean isEqual = a == b; // false
boolean isNotEqual = a != b; // true
boolean isGreater = a > b; // false
boolean isLess = a < b; // true
boolean isGreaterOrEqual = a >= b; // false
boolean isLessOrEqual = a <= b; // true`}
                />
              </div>,
              '3. Logical Operators',
              <div key="local-variables-card" className="card pl-5">
                <CodeCard 
                  title="Logical Operators Example"
                  language="Java"
                  code={`boolean a = true;
boolean b = false;
boolean andResult = a && b; // false
boolean orResult = a || b; // true
boolean notResult = !a; // false`}
                />
              </div>,
              '4. Assignment Operators',
              <div key="local-variables-card" className="card pl-5">
                <CodeCard 
                  title="Assignment Operators Example"
                  language="Java"
                  code={`int a = 10;
a += 5; // a = a + 5
a -= 3; // a = a - 3
a *= 2; // a = a * 2
a /= 4; // a = a / 4
a %= 3; // a = a % 3`}
                />
              </div>,
              '5. Increment/Decrement Operators',
              <div key="local-variables-card" className="card pl-5">
                <CodeCard 
                  title="Increment/Decrement Operators Example"
                  language="Java"
                  code={`int a = 10;
a++; // a = a + 1
a--; // a = a - 1`}
                />
              </div>,
              'Now we are done with Operators. Familiarize ra ayaw i memorize HAHAHAHA',
            ]
          }
        ]
      }
  ];

export default introToProgramming;
