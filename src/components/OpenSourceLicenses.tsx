import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface OpenSourceLicensesProps {
  onBack?: () => void;
}

export default function OpenSourceLicenses({ onBack }: OpenSourceLicensesProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const licenses = [
    {
      name: 'FastAPI',
      version: 'v0.68.0',
      licenseType: 'MIT License',
      licenseTypeColor: 'blue',
      sourceUrl: '#',
      licenseText: `Copyright (c) 2018 Sebastián Ramírez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
    },
    {
      name: 'scikit-learn',
      version: 'v0.24.2',
      licenseType: 'BSD 3-Clause',
      licenseTypeColor: 'orange',
      sourceUrl: '#',
      licenseText: `New BSD License

Copyright (c) 2007–2021 The scikit-learn developers.
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

  a. Redistributions of source code must retain the above copyright notice,
     this list of conditions and the following disclaimer.
  b. Redistributions in binary form must reproduce the above copyright
     notice, this list of conditions and the following disclaimer in the
     documentation and/or other materials provided with the distribution.
  c. Neither the name of the Scikit-learn Developers  nor the names of
     its contributors may be used to endorse or promote products
     derived from this software without specific prior written
     permission. 

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED.`
    },
    {
      name: 'React',
      version: 'v17.0.2',
      licenseType: 'MIT License',
      licenseTypeColor: 'blue',
      sourceUrl: '#',
      licenseText: `MIT License

Copyright (c) Facebook, Inc. and its affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.`
    },
    {
      name: 'TensorFlow.js',
      version: 'v3.8.0',
      licenseType: 'Apache 2.0',
      licenseTypeColor: 'red',
      sourceUrl: '#',
      licenseText: `                                                Apache License
                                           Version 2.0, January 2004
                                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.`
    },
    {
      name: 'Material UI',
      version: 'v4.12.3',
      licenseType: 'MIT License',
      licenseTypeColor: 'blue',
      sourceUrl: '#',
      licenseText: `The MIT License (MIT)

Copyright (c) 2014 Call-Em-All

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.`
    },
    {
      name: 'Lodash',
      version: 'v4.17.21',
      licenseType: 'MIT License',
      licenseTypeColor: 'blue',
      sourceUrl: '#',
      licenseText: `Copyright JS Foundation and other contributors <https://js.foundation/>

Based on Underscore.js, copyright Jeremy Ashkenas, DocumentCloud and Investigative
Reporters & Editors <http://underscorejs.org/>

This software consists of voluntary contributions made by many individuals. For exact
contribution history, see the revision history available at https://github.com/lodash/lodash

The following license applies to all parts of this software except as documented below:

====

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:`
    }
  ];

  const filteredLicenses = licenses.filter(license => 
    license.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    license.version.toLowerCase().includes(searchQuery.toLowerCase()) ||
    license.licenseType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 w-full bg-[#f6f7f8] dark:bg-[#111921] overflow-y-auto font-['Manrope']">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800">
        <div className="px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={onBack}>
            <div className="w-8 h-8 text-[#1466b8] flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">shield_lock</span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Anti-Phishing Guard</h2>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={onBack} className="text-slate-900 dark:text-slate-300 text-sm font-medium hover:text-[#1466b8] transition-colors">Home</button>
            <Link className="text-slate-900 dark:text-slate-300 text-sm font-medium hover:text-[#1466b8] transition-colors" to='/inicio'>Features</Link>
            <Link className="text-slate-900 dark:text-slate-300 text-sm font-medium hover:text-[#1466b8] transition-colors" to='/precios'>Pricing</Link>
            <Link className="text-slate-900 dark:text-slate-300 text-sm font-medium hover:text-[#1466b8] transition-colors" to='/panel'>About Us</Link>
            <Link className="text-[#1466b8] text-sm font-bold" to='/panel'>Legal</Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex h-9 items-center justify-center rounded-lg bg-[#1466b8] px-4 text-white text-sm font-bold shadow-sm hover:bg-blue-700 transition-colors">
              Get Extension
            </button>
            <button className="md:hidden p-2 text-slate-900 dark:text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white dark:bg-background-dark border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 py-3">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <button onClick={onBack} className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">Home</button>
            <span className="text-slate-300 dark:text-slate-600">/</span>
            <Link className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors" to='/panel'>Legal</Link>
            <span className="text-slate-300 dark:text-slate-600">/</span>
            <span className="text-slate-900 dark:text-white font-medium">Open Source Licenses</span>
          </div>
        </div>
      </div>

      <div className="max-w-[960px] mx-auto px-4 sm:px-6 py-10">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-3">Open Source Software Notices</h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-2xl">
            Anti-Phishing Guard is built using the following open source software. We are grateful to the authors and contributors of these projects.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#1466b8] transition-colors">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input 
              className="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-[#1a2632] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1466b8]/50 focus:border-[#1466b8] transition-all shadow-sm" 
              placeholder="Buscar by library name, version, or license type..." 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Licenses List */}
        <div className="space-y-4">
          {filteredLicenses.map((license, index) => (
            <details key={index} className="group bg-white dark:bg-[#1a2632] border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm transition-all duration-200 open:shadow-md">
              <summary className="flex cursor-pointer items-center justify-between p-5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors list-none select-none">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <h3 className="text-slate-900 dark:text-white text-base font-bold">{license.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">{license.version}</span>
                    <span className={`px-2 py-0.5 rounded text-xs font-medium border ${
                      license.licenseTypeColor === 'blue' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-800' :
                      license.licenseTypeColor === 'orange' ? 'bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-100 dark:border-orange-800' :
                      license.licenseTypeColor === 'red' ? 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-100 dark:border-red-800' :
                      'bg-slate-50 dark:bg-slate-900/30 text-slate-700 dark:text-slate-300 border-slate-100 dark:border-slate-800'
                    }`}>
                      {license.licenseType}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <a className="hidden sm:flex text-sm text-slate-500 hover:text-[#1466b8] dark:text-slate-400 dark:hover:text-[#1466b8] transition-colors items-center gap-1" href={license.sourceUrl} onClick={(e) => e.stopPropagation()}>
                    Source
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>
                  <div className="text-slate-400 group-open:rotate-180 transition-transform duration-200">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </div>
              </summary>
              <div className="border-t border-slate-100 dark:border-slate-700 px-5 py-4 bg-slate-50/50 dark:bg-slate-900/20">
                <div className="prose prose-sm prose-slate dark:prose-invert max-w-none">
                  <p className="font-mono text-xs text-slate-600 dark:text-slate-400 whitespace-pre-wrap leading-relaxed">
                    {license.licenseText}
                  </p>
                </div>
              </div>
            </details>
          ))}
          {filteredLicenses.length === 0 && (
            <div className="text-center py-10 text-slate-500 dark:text-slate-400">
              No licenses found matching "{searchQuery}"
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-8 p-4 bg-[#1466b8]/5 border border-[#1466b8]/20 rounded-lg">
          <div className="flex gap-3">
            <span className="material-symbols-outlined text-[#1466b8] mt-0.5">info</span>
            <div>
              <p className="text-sm text-slate-900 dark:text-slate-200 font-medium mb-1">Notice to End Users</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                The source code for the open source software components identified above is available upon request. 
                Please contact <Link className="text-[#1466b8] hover:underline" to='/panel'>legal@antiphishingguard.com</Link> for more information. 
                All third-party trademarks are the property of their respective owners.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 py-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-[#1466b8] text-2xl">shield_lock</span>
                <span className="text-slate-900 dark:text-white font-bold text-lg">Anti-Phishing Guard</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Protecting your digital life with real-time AI threat detection.</p>
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li><Link className="hover:text-[#1466b8]" to='/inicio'>Features</Link></li>
                <li><Link className="hover:text-[#1466b8]" to='/panel'>Extension</Link></li>
                <li><Link className="hover:text-[#1466b8]" to='/precios'>Pricing</Link></li>
                <li><Link className="hover:text-[#1466b8]" to='/panel'>Changelog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li><Link className="hover:text-[#1466b8]" to='/panel'>About Us</Link></li>
                <li><Link className="hover:text-[#1466b8]" to='/panel'>Careers</Link></li>
                <li><Link className="hover:text-[#1466b8]" to='/panel'>Blog</Link></li>
                <li><Link className="hover:text-[#1466b8]" to='/panel'>Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li><Link className="hover:text-[#1466b8]" to="/privacy-compliance">Privacy Policy</Link></li>
                <li><Link className="hover:text-[#1466b8]" to="/terms-of-service">Terms of Service</Link></li>
                <li><Link className="text-[#1466b8] font-medium" to='/panel'>Open Source Licenses</Link></li>
                <li><Link className="hover:text-[#1466b8]" to="/policy-manager">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 dark:text-slate-500 text-sm">creada en 2026 Jonathan Jimenez Escobar</p>
            <div className="flex gap-4">
              <Link className="text-slate-400 hover:text-[#1466b8] dark:hover:text-white transition-colors" to='/panel'>
                <span className="sr-only">Twitter</span>
                <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </Link>
              <Link className="text-slate-400 hover:text-[#1466b8] dark:hover:text-white transition-colors" to='/panel'>
                <span className="sr-only">GitHub</span>
                <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
