"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Job & Internship Portal",
      description:
        "Developed a scalable and secure MERN-based portal enabling 100+ students to explore 50+ verified opportunities through a role-based user system. Automated application filtering and job-posting logic, reducing HR manual effort by 60%.",
      image: "/job-portal-dashboard.png",
      tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
      liveUrl: "#",
      githubUrl: "#",
      code: `// Job Portal - Backend API with Role-Based Access
const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
const Application = require('../models/Application');

// Middleware for authentication
const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Post a new job (HR only)
router.post('/jobs', authenticateUser, async (req, res) => {
  try {
    if (req.user.role !== 'hr') {
      return res.status(403).json({ error: 'Only HR can post jobs' });
    }

    const { title, company, description, salary, location, requirements } = req.body;
    
    const job = new Job({
      title,
      company,
      description,
      salary,
      location,
      requirements: requirements.split(','),
      postedBy: req.user.id,
      createdAt: new Date()
    });
    
    await job.save();
    res.status(201).json({ 
      success: true, 
      message: 'Job posted successfully',
      job 
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get all jobs with filtering
router.get('/jobs', async (req, res) => {
  try {
    const { search, salary, location } = req.query;
    let filter = {};
    
    if (search) filter.title = { $regex: search, $options: 'i' };
    if (salary) filter.salary = { $gte: parseInt(salary) };
    if (location) filter.location = location;
    
    const jobs = await Job.find(filter)
      .populate('postedBy', 'name email')
      .sort({ createdAt: -1 });
    
    res.json({ success: true, jobs });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Apply for a job (Student)
router.post('/apply', authenticateUser, async (req, res) => {
  try {
    const { jobId, resume, coverLetter } = req.body;
    
    const existingApplication = await Application.findOne({
      jobId,
      studentId: req.user.id
    });
    
    if (existingApplication) {
      return res.status(400).json({ error: 'Already applied for this job' });
    }
    
    const application = new Application({
      jobId,
      studentId: req.user.id,
      resume,
      coverLetter,
      status: 'pending',
      appliedAt: new Date()
    });
    
    await application.save();
    res.status(201).json({ 
      success: true, 
      message: 'Application submitted successfully' 
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;`,
    },
    {
      id: 2,
      title: "E-Commerce Web App",
      description:
        "Created a scalable, secure MERN-based e-commerce platform with authentication, product browsing, cart system, and performance-optimized checkout. Owned the backend API structure and flow with secure MongoDB and Express.js integration.",
      image: "/ecommerce-platform-concept.png",
      tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
      liveUrl: "#",
      githubUrl: "#",
      code: `// E-Commerce - Cart Management with React Hooks
import { useState, useCallback } from 'react';
import axios from 'axios';

export const useCart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Add product to cart
  const addToCart = useCallback(async (productId, quantity) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/cart/add', {
        productId,
        quantity
      }, {
        headers: { Authorization: \`Bearer \${localStorage.getItem('token')}\` }
      });
      
      setCart(response.data.cart);
      setError(null);
      return { success: true, message: 'Added to cart!' };
    } catch (err) {
      setError(err.response?.data?.error || 'Error adding to cart');
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  }, []);

  // Remove product from cart
  const removeFromCart = useCallback(async (productId) => {
    setLoading(true);
    try {
      const response = await axios.delete(\`/api/cart/remove/\${productId}\`, {
        headers: { Authorization: \`Bearer \${localStorage.getItem('token')}\` }
      });
      
      setCart(response.data.cart);
      return { success: true };
    } catch (err) {
      setError(err.response?.data?.error);
      return { success: false };
    } finally {
      setLoading(false);
    }
  }, []);

  // Update quantity
  const updateQuantity = useCallback(async (productId, quantity) => {
    setLoading(true);
    try {
      const response = await axios.put(\`/api/cart/update/\${productId}\`, {
        quantity
      }, {
        headers: { Authorization: \`Bearer \${localStorage.getItem('token')}\` }
      });
      
      setCart(response.data.cart);
      return { success: true };
    } catch (err) {
      setError(err.response?.data?.error);
      return { success: false };
    } finally {
      setLoading(false);
    }
  }, []);

  // Calculate total
  const calculateTotal = useCallback(() => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [cart]);

  return {
    cart,
    loading,
    error,
    addToCart,
    removeFromCart,
    updateQuantity,
    calculateTotal
  };
};`,
    },
    {
      id: 3,
      title: "Emotion Detection System",
      description:
        "Designed and implemented an AI system to detect emotions using facial, voice, and text data. Converted PoC into a working module using Python and TensorFlow for multimodal emotion recognition.",
      image: "/emotion-detection-ai.jpg",
      tags: ["Python", "TensorFlow", "Machine Learning", "AI"],
      liveUrl: "#",
      githubUrl: "#",
      code: `# Emotion Detection - Multimodal TensorFlow Model
import tensorflow as tf
from tensorflow.keras import layers, models
import numpy as np
from sklearn.preprocessing import StandardScaler

class EmotionDetectionModel:
    def __init__(self):
        self.emotions = ['angry', 'disgust', 'fear', 'happy', 
                        'neutral', 'sad', 'surprise']
        self.model = self._build_model()
        self.scaler = StandardScaler()
    
    def _build_model(self):
        # Facial recognition branch
        facial_input = layers.Input(shape=(48, 48, 1), name='facial')
        x1 = layers.Conv2D(32, (3, 3), activation='relu')(facial_input)
        x1 = layers.MaxPooling2D((2, 2))(x1)
        x1 = layers.Conv2D(64, (3, 3), activation='relu')(x1)
        x1 = layers.MaxPooling2D((2, 2))(x1)
        x1 = layers.Conv2D(128, (3, 3), activation='relu')(x1)
        x1 = layers.GlobalAveragePooling2D()(x1)
        
        # Voice features branch
        voice_input = layers.Input(shape=(40,), name='voice')
        x2 = layers.Dense(64, activation='relu')(voice_input)
        x2 = layers.Dropout(0.3)(x2)
        x2 = layers.Dense(32, activation='relu')(x2)
        
        # Text features branch
        text_input = layers.Input(shape=(100,), name='text')
        x3 = layers.Dense(64, activation='relu')(text_input)
        x3 = layers.Dropout(0.3)(x3)
        x3 = layers.Dense(32, activation='relu')(x3)
        
        # Merge branches
        merged = layers.Concatenate()([x1, x2, x3])
        merged = layers.Dense(128, activation='relu')(merged)
        merged = layers.Dropout(0.4)(merged)
        merged = layers.Dense(64, activation='relu')(merged)
        
        # Output layer
        output = layers.Dense(len(self.emotions), 
                             activation='softmax')(merged)
        
        model = models.Model(
            inputs=[facial_input, voice_input, text_input],
            outputs=output
        )
        
        model.compile(
            optimizer=tf.keras.optimizers.Adam(learning_rate=0.001),
            loss='categorical_crossentropy',
            metrics=['accuracy']
        )
        
        return model
    
    def predict_emotion(self, facial_data, voice_features, text_features):
        predictions = self.model.predict([
            np.expand_dims(facial_data, 0),
            np.expand_dims(voice_features, 0),
            np.expand_dims(text_features, 0)
        ])
        
        emotion_idx = np.argmax(predictions[0])
        confidence = predictions[0][emotion_idx]
        
        return {
            'emotion': self.emotions[emotion_idx],
            'confidence': float(confidence),
            'all_predictions': {
                self.emotions[i]: float(predictions[0][i]) 
                for i in range(len(self.emotions))
            }
        }`,
    },
  ]

  return (
    <>
      <section
        id="projects"
        className="py-32 bg-gradient-to-b from-slate-950 to-slate-900 dark:from-white dark:to-slate-50 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-500/3 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/3 rounded-full blur-3xl -z-10"></div>

        <div className="container px-4 md:px-8 lg:px-12 mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white dark:text-slate-900 mb-6">
              My Projects
            </h2>
            <p className="text-slate-400 dark:text-slate-600 max-w-3xl mx-auto text-lg font-light">
              Technical projects demonstrating my development skills and problem-solving abilities - building a strong foundation for my networking career.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-slate-900/50 dark:bg-slate-100/50 border border-slate-800 dark:border-slate-300 rounded-2xl overflow-hidden hover:border-cyan-500/50 dark:hover:border-cyan-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/5 flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-800 dark:bg-slate-200">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 dark:from-white via-slate-950/50 dark:via-white/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>

                <div className="p-8 space-y-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white dark:text-slate-900 group-hover:text-cyan-300 dark:group-hover:text-cyan-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 dark:text-slate-600 text-base mt-3 leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-cyan-500/20 dark:bg-cyan-500/30 text-cyan-300 dark:text-cyan-700 border border-cyan-500/40 dark:border-cyan-500/50 text-xs font-medium px-3 py-1"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      onClick={() => setSelectedProject(project.id)}
                      variant="outline"
                      className="border-cyan-500/40 dark:border-cyan-500/50 text-cyan-400 dark:text-cyan-600 hover:bg-cyan-500/10 dark:hover:bg-cyan-500/20 flex-1 bg-transparent font-semibold"
                    >
                      View Code
                    </Button>
                    <Button
                      asChild
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 dark:from-cyan-600 dark:to-blue-600 dark:hover:from-cyan-700 dark:hover:to-blue-700 text-white font-semibold flex-1"
                    >
                      <Link href={project.liveUrl}>Demo</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 dark:bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden flex flex-col border border-slate-800 dark:border-slate-300">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-800 dark:border-slate-300">
              <h3 className="text-2xl font-bold text-white dark:text-slate-900">
                {projects.find((p) => p.id === selectedProject)?.title}
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-slate-400 dark:text-slate-600 hover:text-white dark:hover:text-slate-900 transition-colors text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Code Display */}
            <div className="flex-1 overflow-auto p-6">
              <pre className="bg-slate-950 dark:bg-slate-100 rounded-lg p-6 text-sm text-slate-300 dark:text-slate-700 font-mono overflow-x-auto">
                <code>{projects.find((p) => p.id === selectedProject)?.code}</code>
              </pre>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-slate-800 dark:border-slate-300 flex justify-end">
              <Button
                onClick={() => setSelectedProject(null)}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 dark:from-cyan-600 dark:to-blue-600 dark:hover:from-cyan-700 dark:hover:to-blue-700 text-white font-semibold"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
