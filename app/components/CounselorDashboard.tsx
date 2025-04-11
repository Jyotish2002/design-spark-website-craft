'use client';

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export default function CounselorDashboard() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Counselor Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Today's Schedule Card */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Career Counseling Session</h3>
                <p className="text-sm text-gray-600">10:00 AM - 11:00 AM</p>
                <p className="text-sm">Student: John Doe</p>
                <Button className="mt-2">Start Session</Button>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Resume Review</h3>
                <p className="text-sm text-gray-600">2:00 PM - 3:00 PM</p>
                <p className="text-sm">Student: Jane Smith</p>
                <Button className="mt-2">Start Session</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Students Card */}
        <Card>
          <CardHeader>
            <CardTitle>Active Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Recent Students</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span>John Doe</span>
                    <Button variant="outline" size="sm">View Profile</Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Jane Smith</span>
                    <Button variant="outline" size="sm">View Profile</Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Mike Johnson</span>
                    <Button variant="outline" size="sm">View Profile</Button>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tasks Card */}
        <Card>
          <CardHeader>
            <CardTitle>Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Pending Tasks</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span>Review John's Resume</span>
                    <Button variant="outline" size="sm">Complete</Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Prepare Career Assessment</span>
                    <Button variant="outline" size="sm">Complete</Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Update Session Notes</span>
                    <Button variant="outline" size="sm">Complete</Button>
                  </li>
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
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span>Career Assessment Tools</span>
                    <Button variant="outline" size="sm">Access</Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Industry Reports</span>
                    <Button variant="outline" size="sm">Access</Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Interview Guides</span>
                    <Button variant="outline" size="sm">Access</Button>
                  </li>
                </ul>
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
                  <div className="p-2 border rounded">
                    <p className="text-sm font-semibold">From: John Doe</p>
                    <p className="text-sm">Can we reschedule our session?</p>
                  </div>
                  <div className="p-2 border rounded">
                    <p className="text-sm font-semibold">From: Jane Smith</p>
                    <p className="text-sm">Thank you for the resume feedback!</p>
                  </div>
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
                <Button variant="outline">Add Student</Button>
                <Button variant="outline">Create Report</Button>
                <Button variant="outline">View Calendar</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 