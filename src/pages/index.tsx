import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import {
  Network,
  PlayCircle,
  Check,
  FileText,
  Box,
  Settings,
  Thermometer,
  AlertTriangle,
  GitPullRequest,
  ShieldAlert,
  CloudRain,
  Sparkles,
  FileWarning,
  Download,
  ChevronDown,
  Twitter,
  Github,
  Linkedin,
} from 'lucide-react';

type SimulationState = 'idle' | 'simulating' | 'applied' | 'violation';

export default function Home(): React.ReactNode {
  const [simulationState, setSimulationState] = useState<SimulationState>('idle');
  const [batteryWarning, setBatteryWarning] = useState(false);

  const handleTriggerClick = () => {
    if (simulationState !== 'idle') return;
    
    setSimulationState('simulating');
    
    setTimeout(() => {
      setSimulationState('applied');
      
      setTimeout(() => {
        setSimulationState('violation');
        setBatteryWarning(true);
      }, 800);
    }, 600);
  };

  return (
    <Layout
      title="Nexus | The First Principles RDD Tool"
      description="The only engineering tool that actively blocks conflicts, tracks every dependency, and turns vague specs into physics-aware contracts."
      wrapperClassName="bg-brand-900 text-white font-sans antialiased overflow-x-hidden"
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <html lang="en" className="scroll-smooth" />
      </Head>

      {/* Navbar */}
      <nav className="fixed w-full z-50 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Network className="h-8 w-8 text-brand-400" />
              <span className="font-bold text-xl tracking-tight">Nexus_RDD</span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
              <a href="#problem" className="hover:text-white transition-colors">The Problem</a>
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
              <Link to="/docs/intro" className="hover:text-white transition-colors">Docs</Link>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hidden md:block text-slate-300 hover:text-white text-sm font-medium">Log in</a>
              <a href="#download" className="bg-brand-500 hover:bg-brand-400 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-blue-500/20">
                Download Report
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-500/20 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute inset-0 bg-grid -z-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Copy */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </span>
                v2.0 Now Available
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
                Stop "Integration Hell"<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-400">Before It Starts.</span>
              </h1>
              <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                The only engineering tool that actively blocks conflicts, tracks every dependency, and turns vague specs into physics-aware contracts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={handleTriggerClick}
                  className="flex items-center justify-center gap-2 bg-white text-brand-900 px-6 py-3.5 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
                >
                  <PlayCircle className="w-5 h-5" />
                  Simulate Change
                </button>
                <a href="#download" className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold border border-slate-700 hover:border-slate-500 hover:bg-slate-800 transition-all">
                  Get Impact Report
                </a>
              </div>
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-slate-500 text-sm">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-500" /> ISO 26262 Ready
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-500" /> Physics-Aware
                </div>
              </div>
            </div>

            {/* Right: Interactive Blast Radius Visual */}
            <div className="relative group">
              {/* Glass Container */}
              <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl overflow-hidden min-h-[400px]">
                
                {/* Top Bar */}
                <div className="flex justify-between items-center mb-6 border-b border-slate-700/50 pb-4">
                  <div className="text-xs font-mono text-slate-400">System Topology: <span className="text-brand-400">Drone_Propulsion_v1</span></div>
                  <button
                    onClick={handleTriggerClick}
                    className={`text-xs font-mono border px-3 py-1 rounded transition-colors ${
                      simulationState === 'idle'
                        ? 'bg-brand-500/20 text-brand-300 border-brand-500/50 hover:bg-brand-500/30'
                        : simulationState === 'simulating'
                        ? 'bg-brand-500/20 text-brand-300 border-brand-500/50 animate-pulse'
                        : 'bg-slate-700 text-slate-400 border-slate-600'
                    }`}
                  >
                    {simulationState === 'idle' && 'Trigger: Change Propeller'}
                    {simulationState === 'simulating' && 'Simulating Change...'}
                    {simulationState !== 'idle' && simulationState !== 'simulating' && 'Change Applied'}
                  </button>
                </div>

                {/* Graph Visualization (SVG Overlay + HTML Nodes) */}
                <div className="relative h-[300px] w-full">
                  
                  {/* Connecting Lines (SVG) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                    {/* Parent to Battery */}
                    <line x1="50%" y1="40" x2="25%" y2="150" stroke="#475569" strokeWidth="2" />
                    {/* Parent to Motor */}
                    <line x1="50%" y1="40" x2="75%" y2="150" stroke="#475569" strokeWidth="2" />
                    {/* Motor to Thermal */}
                    <line
                      x1="75%"
                      y1="150"
                      x2="75%"
                      y2="260"
                      stroke={simulationState === 'violation' ? '#f59e0b' : '#475569'}
                      strokeWidth={simulationState === 'violation' ? '3' : '2'}
                    />
                    {/* Battery to Motor */}
                    <line
                      x1="25%"
                      y1="150"
                      x2="75%"
                      y2="150"
                      stroke={simulationState === 'violation' ? '#ef4444' : '#475569'}
                      strokeWidth={simulationState === 'violation' ? '4' : '2'}
                      strokeDasharray="4"
                      className={simulationState === 'violation' ? 'animate-pulse' : ''}
                    />
                  </svg>

                  {/* Nodes */}
                  {/* L1 Req */}
                  <div
                    className={`absolute top-[10px] left-1/2 -translate-x-1/2 bg-slate-900 border p-3 rounded-lg w-48 shadow-lg z-10 node-card ${
                      simulationState === 'violation' ? 'border-rose-500 opacity-50' : 'border-slate-600'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <FileText className="w-3 h-3 text-slate-400" />
                      <span className="text-[10px] font-mono text-slate-400">REQ-001 (L1)</span>
                    </div>
                    <div className="text-xs font-semibold text-white">Mission Duration &gt; 20m</div>
                  </div>

                  {/* Component: Battery */}
                  <div
                    className={`absolute top-[120px] left-[15%] w-40 bg-slate-900 border p-3 rounded-lg shadow-lg z-10 node-card ${
                      simulationState === 'violation' ? 'border-rose-500 bg-rose-500/10' : 'border-slate-600'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Box className="w-3 h-3 text-brand-400" />
                      <span className="text-[10px] font-mono text-slate-400">COMP-BATT</span>
                    </div>
                    <div className="text-xs text-slate-300">LiPo 4S 5000mAh</div>
                    <div className="text-[10px] text-slate-500 mt-1">Max Draw: 60A</div>
                    {batteryWarning && (
                      <div className="text-[10px] text-rose-400 font-bold mt-1">⚠️ DRAW EXCEEDS 60A</div>
                    )}
                  </div>

                  {/* Component: Motor (Target) */}
                  <div
                    className={`absolute top-[120px] right-[15%] w-44 bg-slate-900 border p-3 rounded-lg shadow-lg z-10 node-card ring-2 ${
                      simulationState === 'applied' || simulationState === 'violation'
                        ? 'ring-brand-500'
                        : 'ring-transparent'
                    } ${simulationState === 'idle' ? 'border-slate-600' : ''}`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Settings className="w-3 h-3 text-brand-400" />
                      <span className="text-[10px] font-mono text-slate-400">COMP-PROP</span>
                    </div>
                    <div className="text-xs text-slate-300">
                      {simulationState === 'idle' ? 'Propeller: Standard 5"' : 'Propeller: Heavy Lift 7"'}
                    </div>
                    <div className={`text-[10px] mt-1 ${
                      simulationState === 'idle' ? 'text-slate-500' : 'text-white font-bold'
                    }`}>
                      {simulationState === 'idle' ? 'Load: 12A (Hover)' : 'Load: 18A (Climb)'}
                    </div>
                  </div>

                  {/* L2 Req: Thermal */}
                  <div
                    className={`absolute top-[230px] right-[15%] w-44 bg-slate-900 border p-3 rounded-lg shadow-lg z-10 node-card ${
                      simulationState === 'violation' ? 'border-amber-500 bg-amber-500/10' : 'border-slate-600'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Thermometer className="w-3 h-3 text-slate-400" />
                      <span className="text-[10px] font-mono text-slate-400">REQ-TH-02</span>
                    </div>
                    <div className="text-xs text-slate-300">Max Temp &lt; 60°C</div>
                  </div>

                  {/* Alert Box */}
                  <div
                    className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-rose-500/10 border border-rose-500 text-rose-200 px-4 py-2 rounded-lg text-xs font-mono transition-all duration-300 flex items-center gap-2 w-max ${
                      simulationState === 'violation' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <AlertTriangle className="w-4 h-4" />
                    <span>PHYSICS VIOLATION DETECTED</span>
                  </div>

                </div>
              </div>
              
              {/* Decorative Elements behind card */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-500/30 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Villain Section (Story) */}
      <section id="problem" className="py-20 bg-slate-950 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">The $100,000 Mistake You Didn't See Coming</h2>
          <div className="space-y-6 text-lg text-slate-400 leading-relaxed font-light">
            <p>
              It started as a small change. You swapped the propellors for a slightly heavier version to reduce noise.
            </p>
            <p>
              The requirement changed in the document, but the <span className="text-white font-medium">Battery Discharge Rate</span> didn't update in the simulation model.
            </p>
            <p>
              Two weeks later, during a windy flight test, the drone browned out and fell out of the sky.
            </p>
            <div className="pt-8">
              <span className="inline-block bg-slate-900 border border-slate-700 rounded-lg px-6 py-4 text-brand-400 font-mono text-sm">
                <span className="text-slate-500">&gt;</span> Your current tools treat requirements as text.<br />
                <span className="text-slate-500">&gt;</span> We treat them as <span className="text-white font-bold border-b-2 border-brand-500">physics</span>.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Solutions */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Engineering Superpowers</h2>
            <p className="text-slate-400">Map complex dependencies to simple insights.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1: Blast Radius */}
            <div className="p-8 rounded-2xl bg-slate-800/30 border border-slate-700 hover:border-brand-500/50 transition-colors group">
              <div className="w-12 h-12 bg-brand-500/10 rounded-lg flex items-center justify-center mb-6 text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                <GitPullRequest className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">The "Blast Radius" View</h3>
              <p className="text-slate-400 leading-relaxed">
                Change a motor? Instantly see every test, wire, and line of code that needs to update. No more guessing.
              </p>
            </div>

            {/* Feature 2: The Governor */}
            <div className="p-8 rounded-2xl bg-slate-800/30 border border-slate-700 hover:border-rose-500/50 transition-colors group">
              <div className="w-12 h-12 bg-rose-500/10 rounded-lg flex items-center justify-center mb-6 text-rose-400 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">The Engineering Guardian</h3>
              <p className="text-slate-400 leading-relaxed">
                Stop "Zombie Requirements." If a change violates a safety limit or breaks a dependency, the system <span className="text-rose-400">blocks the save</span>.
              </p>
            </div>

            {/* Feature 3: Context */}
            <div className="p-8 rounded-2xl bg-slate-800/30 border border-slate-700 hover:border-emerald-500/50 transition-colors group">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <CloudRain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Real-World Context</h3>
              <p className="text-slate-400 leading-relaxed">
                A 50°C battery is fine in the lab but fatal in a desert climb. We validate specs against specific operational scenarios.
              </p>
            </div>

            {/* Feature 4: Ambiguity Killer */}
            <div className="p-8 rounded-2xl bg-slate-800/30 border border-slate-700 hover:border-purple-500/50 transition-colors group">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">The 24/7 Co-Pilot</h3>
              <p className="text-slate-400 leading-relaxed">
                Don't write "Make it robust." Our AI agent interviews you to turn vague ideas into measurable, testable numbers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Comparison */}
      <section className="py-20 bg-slate-900 border-t border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-slate-700">
                <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                {/* Mock UI Image placeholder using HTML/CSS */}
                <div className="p-0">
                  <div className="flex border-b border-slate-200">
                    <div className="px-6 py-3 bg-white text-sm font-bold text-brand-600 border-b-2 border-brand-500">Graph View</div>
                    <div className="px-6 py-3 bg-slate-50 text-sm font-medium text-slate-500">Table View</div>
                  </div>
                  <div className="p-6 bg-slate-50 h-[300px] flex items-center justify-center relative">
                    {/* Simulation of clean graph */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-80">
                      <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">REQ</div>
                      <div className="absolute w-40 h-[2px] bg-slate-300 rotate-0"></div>
                      <div className="absolute w-40 h-[2px] bg-slate-300 rotate-45"></div>
                      <div className="absolute w-40 h-[2px] bg-slate-300 rotate-90"></div>
                      <div className="absolute w-40 h-[2px] bg-slate-300 rotate-135"></div>
                      
                      <div className="absolute top-[20%] right-[20%] w-10 h-10 bg-white border border-slate-300 rounded-full shadow-sm flex items-center justify-center text-[10px] text-slate-500">Test</div>
                      <div className="absolute bottom-[20%] left-[20%] w-10 h-10 bg-white border border-slate-300 rounded-full shadow-sm flex items-center justify-center text-[10px] text-slate-500">Code</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Stop Searching. Start Solving.</h2>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                  <div className="w-8 h-8 rounded-full bg-rose-500/20 text-rose-500 flex-shrink-0 flex items-center justify-center font-bold">X</div>
                  <div>
                    <h4 className="font-bold text-slate-200">The Old Way</h4>
                    <p className="text-sm text-slate-400">Search: "Battery Limit" → 0 Results found in Folder "Specs_vFinal".</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex-shrink-0 flex items-center justify-center font-bold">✓</div>
                  <div>
                    <h4 className="font-bold text-white">The Nexus Way</h4>
                    <p className="text-sm text-slate-300">Query: "Show dependencies of Battery" → Graph illuminates 15 nodes across Hardware, Software, and Test.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works (Steps) */}
      <section id="how-it-works" className="py-24 bg-brand-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">From "Idea" to "Validated Spec"</h2>
          </div>
          
          <div className="relative">
            {/* Connector Line */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-800 z-0"></div>

            <div className="grid lg:grid-cols-4 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-slate-900 border-4 border-slate-800 rounded-full flex items-center justify-center mb-6 text-2xl font-bold text-slate-500">1</div>
                <h3 className="text-lg font-bold text-white mb-2">Chat</h3>
                <p className="text-sm text-slate-400">You tell the AI: "We need more range."</p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-slate-900 border-4 border-brand-500 rounded-full flex items-center justify-center mb-6 text-2xl font-bold text-brand-500">2</div>
                <h3 className="text-lg font-bold text-white mb-2">Refine</h3>
                <p className="text-sm text-slate-400">AI asks: "Does that mean &gt;30 mins flight time?"</p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-slate-900 border-4 border-slate-800 rounded-full flex items-center justify-center mb-6 text-2xl font-bold text-slate-500 relative">
                  3
                  <div className="absolute -top-2 -right-2 bg-rose-500 text-[10px] text-white px-2 py-0.5 rounded-full">CHECK</div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Governor</h3>
                <p className="text-sm text-slate-400">Physics Check: "Warning: Requires 10% more battery mass."</p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-slate-900 border-4 border-emerald-500 rounded-full flex items-center justify-center mb-6 text-2xl font-bold text-emerald-500">4</div>
                <h3 className="text-lg font-bold text-white mb-2">Commit</h3>
                <p className="text-sm text-slate-400">The spec is saved and downstream teams are notified.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Lead Magnet Section */}
      <section id="download" className="py-24 relative overflow-hidden bg-slate-900 border-t border-slate-800">
        {/* Background styling */}
        <div className="absolute inset-0 bg-brand-900/50"></div>
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono mb-6">
            <FileWarning className="w-3 h-3" />
            Field Guide
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The "Silent Killer" Integration Checklist</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Most integration bugs hide in the "handshakes" between components. 
            <span className="text-white"> Download the field guide</span> used by top systems engineers to catch the 
            <span className="text-white border-b border-brand-500/50"> 10 most expensive errors</span> 
            {' '}<em>before</em> they hit the simulation lab.
          </p>
          
          <div className="bg-slate-800/80 backdrop-blur-lg border border-slate-700 p-8 rounded-2xl max-w-lg mx-auto shadow-2xl relative group">
            {/* Glowing border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-rose-500 rounded-2xl opacity-20 group-hover:opacity-50 blur transition duration-500"></div>
            
            <form className="space-y-4 relative bg-slate-800/90 rounded-xl p-2">
              {/* Email Field */}
              <div>
                <div className="text-left mb-2">
                  <label htmlFor="email" className="text-xs font-mono text-slate-400 ml-1 uppercase">Work Email</label>
                </div>
                <input
                  type="email"
                  id="email"
                  placeholder="engineer@company.com"
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Current Tool Dropdown */}
              <div>
                <div className="text-left mb-2">
                  <label htmlFor="current-tool" className="text-xs font-mono text-slate-400 ml-1 uppercase">Current Requirement Tool</label>
                </div>
                <div className="relative">
                  <select
                    id="current-tool"
                    className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all appearance-none pr-10"
                  >
                    <option value="" disabled>Select your current tool...</option>
                    <option value="excel">Excel / Google Sheets</option>
                    <option value="word">Word / Google Docs</option>
                    <option value="doors">IBM DOORS</option>
                    <option value="jama">Jama Connect</option>
                    <option value="jira">Jira (Atlassian)</option>
                    <option value="other">Other / Homegrown</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Biggest Pain Dropdown */}
              <div>
                <div className="text-left mb-2">
                  <label htmlFor="biggest-pain" className="text-xs font-mono text-slate-400 ml-1 uppercase">Biggest Frustration</label>
                </div>
                <div className="relative">
                  <select
                    id="biggest-pain"
                    className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all appearance-none pr-10"
                  >
                    <option value="" disabled>What slows you down most?</option>
                    <option value="integration">Integration Bugs (Late discovery)</option>
                    <option value="traceability">Manual Traceability (The "Matrix")</option>
                    <option value="ambiguity">Vague Specs / Back-and-forth</option>
                    <option value="audits">Audit Prep Panic</option>
                    <option value="silos">Disconnected Tools (Silos)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Tell us your pain point Text Area */}
              <div>
                <div className="text-left mb-2">
                  <label htmlFor="pain-detail" className="text-xs font-mono text-slate-400 ml-1 uppercase">Tell us your pain point</label>
                </div>
                <textarea
                  id="pain-detail"
                  rows={2}
                  placeholder="e.g. We spent 3 weeks tracing a battery change..."
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-brand-500/20 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Reveal Hidden Risks (PDF)
                </button>
              </div>
              <p className="text-xs text-slate-500 mt-4 border-t border-slate-700 pt-4">
                Join 1,200+ engineers at companies like Boeing and Tesla. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <Network className="h-6 w-6 text-slate-600" />
            <span className="font-bold text-slate-500 tracking-tight">Nexus_RDD</span>
          </div>
          <div className="text-sm text-slate-600">
            &copy; 2025 First Principles Engineering. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-600 hover:text-white"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-slate-600 hover:text-white"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-slate-600 hover:text-white"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
