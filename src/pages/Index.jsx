import React from "react";
import { Cat } from "lucide-react";

const CatFact = ({ fact }) => (
  <div className="flex items-center space-x-2 mb-2">
    <Cat className="h-5 w-5 text-blue-500" />
    <p>{fact}</p>
  </div>
);

const Index = () => {
  const catFacts = [
    "Cats have over 20 muscles that control their ears.",
    "A group of cats is called a clowder.",
    "Cats sleep for 70% of their lives.",
    "A cat's nose print is unique, like a human's fingerprint.",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">All About Cats</h1>
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba" 
            alt="Cute cat" 
            className="w-full h-64 object-cover"
          />
          
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Fascinating Cat Facts</h2>
            
            <div className="space-y-4">
              {catFacts.map((fact, index) => (
                <CatFact key={index} fact={fact} />
              ))}
            </div>
            
            <p className="mt-6 text-gray-600">
              Cats have been beloved companions to humans for thousands of years. 
              Their playful nature, independence, and affectionate behavior make 
              them one of the most popular pets worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
