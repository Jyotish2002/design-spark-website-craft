
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Brain, GraduationCap, Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Student = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'ai' | 'subjects'>('ai');
  const [aiQuery, setAiQuery] = useState('');
  const [subjects, setSubjects] = useState([
    { name: 'Mathematics', grade: '' },
    { name: 'English', grade: '' },
    { name: 'Science', grade: '' },
  ]);
  const [results, setResults] = useState<string | null>(null);

  const handleAddSubject = () => {
    setSubjects([...subjects, { name: '', grade: '' }]);
  };

  const handleSubjectChange = (index: number, field: 'name' | 'grade', value: string) => {
    const newSubjects = [...subjects];
    newSubjects[index][field] = value;
    setSubjects(newSubjects);
  };

  const handleAiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiQuery.trim()) {
      toast({
        title: "Empty Query",
        description: "Please enter your career interests or questions.",
        variant: "destructive",
      });
      return;
    }
    
    // This would normally connect to an AI service
    setResults(`Based on your interest in "${aiQuery}", we recommend exploring careers in the following areas:
      \n\n1. Software Development
      \n2. Data Science
      \n3. UI/UX Design
      \n\nThese fields match your expressed interests and offer strong growth potential.`);
    
    toast({
      title: "Analysis Complete",
      description: "We've analyzed your interests and provided recommendations.",
    });
  };

  const handleSubjectsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emptyFields = subjects.some(subject => !subject.name || !subject.grade);
    if (emptyFields) {
      toast({
        title: "Incomplete Information",
        description: "Please fill in all subject names and grades.",
        variant: "destructive",
      });
      return;
    }
    
    // This would normally analyze the grades and provide recommendations
    const highestGradeSubject = subjects.reduce((prev, current) => 
      (current.grade > prev.grade) ? current : prev, subjects[0]);
      
    setResults(`Based on your academic performance, we recommend:
      \n\n1. ${highestGradeSubject.name}-related careers
      \n2. Research positions in ${subjects[0].name}
      \n3. Teaching opportunities
      \n\nYour strongest subject appears to be ${highestGradeSubject.name}, which suggests you might excel in related fields.`);
    
    toast({
      title: "Analysis Complete",
      description: "We've analyzed your grades and provided recommendations.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Navigation />
      <main className="flex-1 px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-purple-900 text-center">
            Student <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Career Guidance</span>
          </h1>
          
          <div className="bg-white rounded-2xl shadow-xl border border-purple-100 overflow-hidden">
            <div className="flex border-b border-gray-200">
              <button
                className={`flex-1 py-4 text-center font-medium text-sm transition-colors ${
                  activeTab === 'ai' ? 'bg-purple-50 text-purple-700' : 'bg-white text-gray-600 hover:bg-purple-50/30'
                }`}
                onClick={() => setActiveTab('ai')}
              >
                <Brain className="inline-block mr-2 h-5 w-5" />
                Ask AI About Careers
              </button>
              <button
                className={`flex-1 py-4 text-center font-medium text-sm transition-colors ${
                  activeTab === 'subjects' ? 'bg-blue-50 text-blue-700' : 'bg-white text-gray-600 hover:bg-blue-50/30'
                }`}
                onClick={() => setActiveTab('subjects')}
              >
                <GraduationCap className="inline-block mr-2 h-5 w-5" />
                Enter Subject Grades
              </button>
            </div>
            
            <div className="p-6">
              {activeTab === 'ai' ? (
                <form onSubmit={handleAiSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="aiQuery" className="block text-sm font-medium text-gray-700 mb-1">
                      What subjects or careers are you interested in?
                    </label>
                    <Textarea
                      id="aiQuery"
                      placeholder="I enjoy mathematics and computer science, what careers would suit me?"
                      value={aiQuery}
                      onChange={(e) => setAiQuery(e.target.value)}
                      className="min-h-[100px] border-purple-200 focus:border-purple-400"
                    />
                  </div>
                  <div className="text-right">
                    <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                      Get AI Recommendations <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleSubjectsSubmit} className="space-y-4">
                  <p className="text-sm text-gray-600 mb-4">
                    Enter your subjects and grades to receive personalized career recommendations.
                  </p>
                  
                  {subjects.map((subject, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-1">
                        <Input
                          placeholder="Subject name"
                          value={subject.name}
                          onChange={(e) => handleSubjectChange(index, 'name', e.target.value)}
                          className="border-blue-200"
                        />
                      </div>
                      <div className="w-24">
                        <Input
                          placeholder="Grade"
                          value={subject.grade}
                          onChange={(e) => handleSubjectChange(index, 'grade', e.target.value)}
                          className="border-blue-200"
                        />
                      </div>
                    </div>
                  ))}
                  
                  <div className="flex justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleAddSubject}
                      className="border-blue-300 text-blue-600"
                    >
                      Add Subject
                    </Button>
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                      Analyze Grades <Search className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </form>
              )}
              
              {results && (
                <Card className="mt-8 border-2 border-green-200 bg-green-50/50">
                  <CardContent className="p-6">
                    <h3 className="font-medium text-green-800 mb-2">Your Career Recommendations</h3>
                    <p className="text-gray-700 whitespace-pre-line">{results}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h2 className="text-xl font-medium text-purple-800 mb-4">Want more personalized guidance?</h2>
            <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <a href="/counsellor">Connect with a Professional Counsellor</a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Student;
