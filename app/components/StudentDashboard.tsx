'use client';

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export default function StudentDashboard() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Upcoming Sessions Card */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Career Counseling Session</h3>
                <p className="text-sm text-gray-600">Tomorrow, 10:00 AM</p>
                <Button className="mt-2">Join Session</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Career Goals Card */}
        <Card>
          <CardHeader>
            <CardTitle>Career Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Short Term Goals</h3>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  <li>Complete resume review</li>
                  <li>Research internship opportunities</li>
                  <li>Prepare for mock interviews</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resources Card */}
        <Card>
          <CardHeader>
            <CardTitle>Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Available Resources</h3>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  <li>Career Assessment Tools</li>
                  <li>Industry Reports</li>
                  <li>Interview Preparation Guide</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Progress Tracking Card */}
        <Card>
          <CardHeader>
            <CardTitle>Progress Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Current Progress</h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-gray-600">Career Assessment</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Resume Building</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Messages Card */}
        <Card>
          <CardHeader>
            <CardTitle>Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Recent Messages</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">From: Career Counselor</p>
                  <p className="text-sm">Your resume review is scheduled for tomorrow.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions Card */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline">Schedule Session</Button>
                <Button variant="outline">Upload Resume</Button>
                <Button variant="outline">Book Mock Interview</Button>
                <Button variant="outline">View Reports</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 