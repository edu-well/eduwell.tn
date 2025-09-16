import React, { useState, useEffect } from 'react';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const programs = [
    { 
      value: 'Bac Math', 
      icon: 'π', 
      color: 'from-blue-500 to-blue-600',
      description: 'Mathematics & Physics focus'
    },
    { 
      value: 'Bac Science', 
      icon: '🧪', 
      color: 'from-emerald-500 to-emerald-600',
      description: 'Experimental Sciences focus'
    },
    { 
      value: 'Bac Technique', 
      icon: '⚙️', 
      color: 'from-purple-500 to-purple-600',
      description: 'Technical Sciences focus'
    },
    { 
      value: 'Bac Eco', 
      icon: '📈', 
      color: 'from-amber-500 to-amber-600',
      description: 'Economics & Management focus'
    }
  ];

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.name.trim()) {
        newErrors.name = 'Please enter your Instagram username';
      }
    }
    
    if (step === 2) {
      if (!formData.email.trim()) {
        newErrors.email = 'Please enter your email address';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }
    
    if (step === 3 && !selectedProgram) {
      newErrors.program = 'Please select a program';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleProgramSelect = (program) => {
    setSelectedProgram(program);
    if (errors.program) {
      setErrors(prev => ({
        ...prev,
        program: ''
      }));
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(3)) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsModalOpen(false);
        setShowSuccess(false);
        setFormData({ name: '', email: '' });
        setSelectedProgram('');
        setErrors({});
        setCurrentStep(1);
      }, 3000);
    }, 1500);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowSuccess(false);
    setFormData({ name: '', email: '' });
    setSelectedProgram('');
    setErrors({});
    setCurrentStep(1);
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>

      {/* Welcome Section */}
      <div className="flex items-center justify-center min-h-screen p-4 relative z-10">
        <div className="w-full max-w-2xl mx-auto">
          <div className="text-center bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-10 md:p-16 border border-white/30 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  🎓
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    EduWell Classroom
                  </h1>
                  <p className="text-sm text-slate-500 mt-1">Premium Education Platform</p>
                </div>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black text-slate-800 mb-6 tracking-tight">
                Bac <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">2026</span>
              </h2>
              
              <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                Join our exclusive BAC preparation programs and unlock premium resources designed for guaranteed academic success.
              </p>
              
              <button
                onClick={() => setIsModalOpen(true)}
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-5 px-10 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4 mx-auto relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Begin Registration</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <div className="mt-12 pt-8 border-t border-slate-200/50">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">98%</div>
                    <div className="text-sm text-slate-500">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-indigo-600">500+</div>
                    <div className="text-sm text-slate-500">Students</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">24/7</div>
                    <div className="text-sm text-slate-500">Support</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600">✓</div>
                    <div className="text-sm text-slate-500">Guaranteed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div 
            className="bg-white rounded-3xl shadow-3xl w-full max-w-md max-h-[90vh] flex flex-col animate-scale-in relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Progress Bar */}
            {!showSuccess && (
              <div className="h-1 bg-slate-100">
                <div 
                  className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500 ease-out"
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                ></div>
              </div>
            )}
            
            {/* Header */}
            <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {!showSuccess ? (
                <>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-2xl font-bold">Registration</h2>
                    <div className="text-sm text-blue-100 bg-white/20 px-3 py-1 rounded-full">
                      Step {currentStep} of 3
                    </div>
                  </div>
                  <p className="text-blue-100">
                    {currentStep === 1 && "Let's start with your Instagram username"}
                    {currentStep === 2 && "Now, your email address"}
                    {currentStep === 3 && "Finally, select your BAC program"}
                  </p>
                </>
              ) : (
                <div className="text-center">
                  <h2 className="text-2xl font-bold">Registration Complete</h2>
                  <p className="text-blue-100">Thank you for joining us!</p>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {!showSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-3">
                          Instagram Username <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                            @
                          </div>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="instagram_username"
                            className={`w-full pl-10 pr-4 py-4 border-2 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 ${
                              errors.name ? 'border-red-500 bg-red-50' : 'border-slate-200 hover:border-slate-300 focus:border-blue-500'
                            }`}
                            autoFocus
                          />
                        </div>
                        {errors.name && (
                          <p className="mt-2 text-sm text-red-500 font-medium flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {errors.name}
                          </p>
                        )}
                      </div>
                      
                      <div className="bg-blue-50/50 border border-blue-200/50 rounded-2xl p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <p className="text-sm text-blue-800">
                            We'll use this to send you important updates and connect you with study groups.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-3">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                          </div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="example@domain.com"
                            className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 ${
                              errors.email ? 'border-red-500 bg-red-50' : 'border-slate-200 hover:border-slate-300 focus:border-blue-500'
                            }`}
                            autoFocus
                          />
                        </div>
                        {errors.email && (
                          <p className="mt-2 text-sm text-red-500 font-medium flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {errors.email}
                          </p>
                        )}
                      </div>
                      
                      <div className="bg-emerald-50/50 border border-emerald-200/50 rounded-2xl p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-sm text-emerald-800">
                            Your email will be used for official communications and access to our learning platform.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-4">
                          Select Your BAC Program <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-1 gap-3">
                          {programs.map((program) => (
                            <button
                              key={program.value}
                              type="button"
                              onClick={() => handleProgramSelect(program.value)}
                              className={`p-5 rounded-2xl border-2 transition-all duration-300 text-left hover:shadow-lg hover:-translate-y-1 ${
                                selectedProgram === program.value
                                  ? `bg-gradient-to-r ${program.color} text-white border-transparent shadow-xl`
                                  : 'bg-white border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              <div className="flex items-center gap-4">
                                <div className="text-3xl">{program.icon}</div>
                                <div className="flex-1">
                                  <div className="font-bold text-lg">{program.value}</div>
                                  <div className={`text-sm ${selectedProgram === program.value ? 'text-blue-100' : 'text-slate-500'}`}>
                                    {program.description}
                                  </div>
                                </div>
                                {selectedProgram === program.value && (
                                  <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                  </div>
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                        {errors.program && (
                          <p className="mt-4 text-sm text-red-500 font-medium flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {errors.program}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce shadow-2xl">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-4">Registration Successful!</h3>
                  <p className="text-slate-600 text-lg mb-8">We've received your application and will contact you shortly.</p>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
                    <div className="flex items-center gap-3 text-blue-700">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">Check your email for confirmation details</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            {!showSuccess && (
              <div className="p-6 border-t border-slate-100 bg-slate-50/50">
                <div className="flex gap-3">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-2xl hover:bg-slate-100 transition-all duration-300 flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      <span>Back</span>
                    </button>
                  )}
                  <div className="flex-1"></div>
                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      <span>Continue</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-2xl hover:from-emerald-700 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <span>Complete Registration</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default App;