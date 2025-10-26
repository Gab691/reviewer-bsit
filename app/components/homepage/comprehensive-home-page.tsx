'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import introToComputing from '../lessons/intro-to-computing';
import introToProgramming from '../lessons/intro-to-programming';
import { CodeIcon, ComputerIcon } from 'lucide-react';
import '../styles/style.css';

export default function ComprehensiveReviewer() {

  const [activeSection, setActiveSection] = React.useState('history');
  const [contentHeight, setContentHeight] = useState('auto');
  const [dropdownITC, setDropdownITC] = useState(false);
  const [dropdownITP, setDropdownITP] = useState(false);

  useEffect(() => {
    
    const content = document.querySelector('.content-section');
    if (content) {
      setContentHeight(`${content.scrollHeight}px`);
    }

  
  }, [activeSection]); 

  const toggleDropdownITC = () => {
    setDropdownITC(!dropdownITC);
  };

  const toggleDropdownITP = () => {
    setDropdownITP(!dropdownITP)
  }
  
  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-8 background-design">
      <div className="max-w-7xl mx-auto ">
        {/* sidebar */}
        <main>
          <section className='d-block' id='responsiveness-design-pc-layout'>
            <aside className='w-65 bg-white border-r border-gray-200 fixed inset-y-0 left-0 overflow-auto h-screen'>
              <header>
                <div className="bg-white/80 p-8 mb-3 shadow-md transition-all duration-300 ">
                  <div className="max-w-3xl">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full mb-4">
                      CCE101L Reviewer
                    </span>
                    <h1 className="text-md sm:text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-slate-800 to-slate-600 mb-3">
                      Comprehensive Study Guide
                    </h1>
                    <p className="text-slate-500 text-md">
                      Master Introduction to Computing with our complete study materials and resources
                    </p>
                  </div>
                </div>
              </header>
            
              <nav className='mb-10'>
                {/* ********************************************************* */}
                {/* intro to computing section nav */}
                <div>
                  <div className='flex items-center gap-3 p-3 rounded-md hover:bg-gray-100'>
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <ComputerIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-md font-bold text-slate-800">Intro To Computing</h2> 
                    <label className='popup'>
                      <input type='checkbox' onClick={toggleDropdownITC}/>
                        <div className="burger" tabIndex={0}>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                    </label>
                  </div>
                  <div id='dropdownDotsHorizontal' className={dropdownITC ? 'block' : 'hidden'}>
                    {introToComputing.map((section) => {  
                      const Icon = section.icon;
                      return (
                        <div key={section.id} className={
                              activeSection === section.id
                                ? 'bg-blue-50 text-blue-700'
                                : 'bg-slate-50 text-slate-700 hover:bg-slate-100/80'}>
                          <button
                            onClick={() => setActiveSection(section.id)}
                            className={`flex items-center gap-3 p-3 rounded-xl text-left transition-all`}
                          >
                            <div className={`p-2 rounded-lg ${
                              activeSection === section.id ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'
                            }`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-medium">{section.title}</span>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* ********************************************************* */}
                {/* intro to programming section nav */}
                <div>
                  <div className='flex items-center gap-3 p-3 rounded-md hover:bg-gray-100'>
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <ComputerIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-md font-bold text-slate -800">Intro To Programming</h2> 
                    <label className='popup'>
                      <input type='checkbox' onClick={toggleDropdownITP}/>
                        <div className="burger" tabIndex={0}>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                    </label>
                  </div>
                  <div id='dropdownDotsHorizontal' className={dropdownITP ? 'block' : 'hidden'}>
                    {introToProgramming.map((section) => {  
                      const Icon = section.icon;
                      return (
                        <div key={section.id} className={
                              activeSection === section.id
                                ? 'bg-blue-50 text-blue-700'
                                : 'bg-slate-50 text-slate-700 hover:bg-slate-100/80'}>
                          <button
                            onClick={() => setActiveSection(section.id)}
                            className={`flex items-center gap-3 p-3 rounded-xl text-left transition-all`}
                          >
                            <div className={`p-2 rounded-lg ${
                              activeSection === section.id ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'
                            }`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-medium">{section.title}</span>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </nav>
            </aside>
            {/* content */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-8 ml-65 shadow-sm border border-slate-100/50 transition-all duration-300" id='responsiveness-design-pc-layout'>
              {introToComputing.map((section) => {
                if (section.id !== activeSection) return null;
                const Icon = section.icon;
                
                return (
                  <div key={section.id} className="animate-fadeIn">
                    <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                      <div className="p-3 bg-blue-50 rounded-xl">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-800">
                        {section.title}
                      </h2>
                    </div>

                    <div className="space-y-8">
                      {section.content.map((subsection, idx) => (
                        <div key={idx} className="group">
                          <h3 className="text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-100">
                            {subsection.subtitle}
                          </h3>
                          <ul className="space-y-3">
                            {subsection.items.map((item, itemIdx) => (
                              <li
                                key={itemIdx}
                                className="relative pl-6 py-2 -ml-2 rounded-lg transition-all duration-200 hover:bg-gray-200"
                              >
                                <span className={`block ${item.startsWith('  ') ? 'ml-4' : ''} ${item.startsWith('    ') ? 'ml-8' : ''}`}>
                                  {!item.startsWith('  ') && (
                                    <span className="absolute left-0 top-5 w-2 h-2 bg-blue-500 rounded-full transform -translate-y-1/2"></span>
                                  )}
                                  <span className="text-slate-700">{item.trim()}</span>
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  <p className="text-gray-500 italic mt-10">You've reached the end of this section! Congratulations! Don't forget to take a rest.</p>
                  </div>
                );
              })}

              {/* Intro to Programming Content */}
              {introToProgramming.map((section) => {
                if (section.id !== activeSection) return null;
                const Icon = section.icon;
                
                return (
                  <div key={section.id} className="animate-fadeIn">
                    <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                      <div className="p-3 bg-emerald-50 rounded-xl">
                        <Icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-800">
                        {section.title}
                      </h2>
                    </div>

                    <div className="space-y-8">
                      {section.content ? (
                        section.content.map((subsection, idx) => (
                          <div key={idx} className="group">
                            <h3 className="text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-100">
                              {subsection.subtitle}
                            </h3>
                            {subsection.items && (
                              <ul className="space-y-3">
                                {subsection.items.map((item, itemIdx) => (
                                  <li
                                    key={itemIdx}
                                    className={`relative py-1.5 -ml-2 rounded-lg transition-all duration-200 ${
                                      typeof item === 'string' ? 'pl-6 hover:bg-slate-50/80' : ''
                                    }`}
                                  >
                                    {typeof item === 'string' ? (
                                      <span className={`block ${
                                        item.startsWith('  ') ? 'ml-4' : ''
                                      } ${
                                        item.startsWith('    ') ? 'ml-8' : ''
                                      }`}>
                                        {!item.startsWith('  ') && (
                                          <span className="absolute left-0 top-5 w-2 h-2 bg-emerald-500 rounded-full transform -translate-y-1/2"></span>
                                        )}
                                        <span className="text-slate-700">{item.trim()}</span>
                                      </span>
                                    ) : (
                                      <div className="my-4">
                                        {item}
                                      </div>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            )}
                            {!subsection.items && (
                              <p className="text-gray-500 italic">No Content Found!</p>
                            )}
                            <p className="text-gray-500 italic mt-10">You've reached the end of this section! Congratulations! Don't forget to take a rest.</p>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-500 italic">No content available for this section.</p>
                      )}
                    </div>
                  </div>
                );
              })}
              <div className="flex flex-col sm:flex-row items-center justify-between p-3 mt-10 gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-5shadow-sm border border-slate-100/50 mb-1">
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="inline-flex items-center px-4 py-2 bg-slate-50 text-slate-600 text-sm font-medium rounded-full">
                    <svg className="w-4 h-4 mr-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Exclusive to IT students
                  </span>
                  <span className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Study well and good luck! 📚✨
                  </span>
                  
                </div>
                <button 
                  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  Back to top
                </button>
              </div>
            </div>
          </section>



          {/* Mobile section */}
          <section>
            <nav id='responsiveness-design-cp-layout'>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-sm border border-slate-100/50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className='flex items-center gap-3 p-3 rounded-md hover:bg-gray-100'>
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <ComputerIcon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h2 className="text-md font-bold text-slate-800">Intro To Computing</h2> 
                      <label className='popup'>
                        <input type='checkbox' onClick={toggleDropdownITC}/>
                          <div className="burger" tabIndex={0}>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                      </label>
                    </div>
                    <div id='dropdownDotsHorizontal' className={dropdownITC ? 'block' : 'hidden'}>
                      {introToComputing.map((section) => {  
                        const Icon = section.icon;
                        return (
                          <div key={section.id} className={
                                activeSection === section.id
                                  ? 'bg-blue-50 text-blue-700'
                                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100/80'}>
                            <button
                              onClick={() => setActiveSection(section.id)}
                              className={`flex items-center gap-3 p-3 rounded-xl text-left transition-all`}
                            >
                              <div className={`p-2 rounded-lg ${
                                activeSection === section.id ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'
                              }`}>
                                <Icon className="w-4 h-4" />
                              </div>
                              <span className="text-sm font-medium">{section.title}</span>
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                    <div>
                    <div className='flex items-center gap-3 p-3 rounded-md hover:bg-gray-100'>
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <ComputerIcon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h2 className="text-md font-bold text-slate-800">Intro To Programming</h2> 
                      <label className='popup'>
                        <input type='checkbox' onClick={toggleDropdownITP}/>
                          <div className="burger" tabIndex={0}>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                      </label>
                    </div>
                    <div id='dropdownDotsHorizontal' className={dropdownITP ? 'block' : 'hidden'}>
                      {introToProgramming.map((section) => {  
                        const Icon = section.icon;
                        return (
                          <div key={section.id} className={
                                activeSection === section.id
                                  ? 'bg-blue-50 text-blue-700'
                                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100/80'}>
                            <button
                              onClick={() => setActiveSection(section.id)}
                              className={`flex items-center gap-3 p-3 rounded-xl text-left transition-all`}
                            >
                              <div className={`p-2 rounded-lg ${
                                activeSection === section.id ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'
                              }`}>
                                <Icon className="w-4 h-4" />
                              </div>
                              <span className="text-sm font-medium">{section.title}</span>
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </nav> 

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-8 shadow-sm border border-slate-100/50 transition-all duration-300" id='responsiveness-design-cp-layout'>
              {introToComputing.map((section) => {
                if (section.id !== activeSection) return null;
                const Icon = section.icon;
                
                return (
                  <div key={section.id} className="animate-fadeIn">
                    <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                      <div className="p-3 bg-blue-50 rounded-xl">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-800">
                        {section.title}
                      </h2>
                    </div>

                    <div className="space-y-8">
                      {section.content.map((subsection, idx) => (
                        <div key={idx} className="group">
                          <h3 className="text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-100">
                            {subsection.subtitle}
                          </h3>
                          <ul className="space-y-3">
                            {subsection.items.map((item, itemIdx) => (
                              <li
                                key={itemIdx}
                                className="relative pl-6 py-2 -ml-2 rounded-lg transition-all duration-200 hover:bg-slate-50/80"
                              >
                                <span className={`block ${item.startsWith('  ') ? 'ml-4' : ''} ${item.startsWith('    ') ? 'ml-8' : ''}`}>
                                  {!item.startsWith('  ') && (
                                    <span className="absolute left-0 top-3.5 w-2 h-2 bg-blue-500 rounded-full transform -translate-y-1/2"></span>
                                  )}
                                  <span className="text-slate-700">{item.trim()}</span>
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}

              {introToProgramming.map((section) => {
                if (section.id !== activeSection) return null;
                const Icon = section.icon;
                
                return (
                  <div key={section.id} className="animate-fadeIn">
                    <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                      <div className="p-3 bg-emerald-50 rounded-xl">
                        <Icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-800">
                        {section.title}
                      </h2>
                    </div>

                    <div className="space-y-8">
                      {section.content ? (
                        section.content.map((subsection, idx) => (
                          <div key={idx} className="group">
                            <h3 className="text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-100">
                              {subsection.subtitle}
                            </h3>
                            {subsection.items && (
                              <ul className="space-y-3">
                                {subsection.items.map((item, itemIdx) => (
                                  <li
                                    key={itemIdx}
                                    className={`relative py-1.5 -ml-2 rounded-lg transition-all duration-200 ${
                                      typeof item === 'string' ? 'pl-6 hover:bg-slate-50/80' : ''
                                    }`}
                                  >
                                    {typeof item === 'string' ? (
                                      <span className={`block ${
                                        item.startsWith('  ') ? 'ml-4' : ''
                                      } ${
                                        item.startsWith('    ') ? 'ml-8' : ''
                                      }`}>
                                        {!item.startsWith('  ') && (
                                          <span className="absolute left-0 top-5 w-2 h-2 bg-emerald-500 rounded-full transform -translate-y-1/2"></span>
                                        )}
                                        <span className="text-slate-700">{item.trim()}</span>
                                      </span>
                                    ) : (
                                      <div className="my-4">
                                        {item}
                                      </div>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            )}
                            {!subsection.items && (
                              <p className="text-gray-500 italic">No Content Found!</p>
                            )}
                            <p className="text-gray-500 italic mt-10">You've reached the end of this section! Congratulations! Don't forget to take a rest.</p>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-500 italic">No content available for this section.</p>
                      )}
                    </div>
                  </div>
                );
              })}

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-slate-100/50 mb-6">
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="inline-flex items-center px-4 py-2 bg-slate-50 text-slate-600 text-sm font-medium rounded-full">
                    <svg className="w-4 h-4 mr-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Exclusive to IT students
                  </span>
                  <span className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Study well and good luck! 📚✨
                  </span>
                </div>
                <button 
                  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  Back to top
                </button>
              </div>
            </div> 
          </section>
        </main>
      </div>
    </div>
  );
}