'use client'

import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'

interface ProfileProps {
  name: string
  email: string
  role: string
  avatarSrc: string
  bio?: string
}

// User Profile Info Component
const UserProfileInfo: React.FC<ProfileProps> = ({ name, email, role, avatarSrc, bio }) => {
  return (
    <div className="flex items-center space-x-4">
      <Avatar>
        <AvatarImage src={avatarSrc || '/path/to/default-avatar.jpg'} alt={`${name}'s profile picture`} />
        <AvatarFallback>{name?.charAt(0).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div>
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-muted-foreground">{email}</p>
        <p className="text-sm text-muted-foreground">Role: {role}</p>
        <p className="text-sm text-muted-foreground">{bio || 'No bio added yet.'}</p>
      </div>
    </div>
  )
}

// Main Profile Component
const Profile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [theme, setTheme] = useState('light')
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [profileData, setProfileData] = useState<ProfileProps>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'User',
    avatarSrc: '/path/to/profile.jpg',
    bio: 'F1 enthusiast and AI geek 🏎️🤖',
  })

  // Handle Avatar Change
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const newAvatarUrl = URL.createObjectURL(file)
      setProfileData({ ...profileData, avatarSrc: newAvatarUrl })
    }
  }

  // Handle Profile Update
  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault()
    setIsEditing(false)
    // Call API to save changes here
    alert('Profile updated successfully!')
  }

  // Activity Logs
  const activityLogs = [
    { action: 'Predicted Verstappen as winner for Monaco GP', time: '2 hours ago' },
    { action: 'Updated profile picture', time: '1 day ago' },
    { action: 'Changed password', time: '3 days ago' },
  ]

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="hover:bg-gray-100 focus:ring-2 focus:ring-primary">
          Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1000px] h-[500px] rounded-lg overflow-y-auto">
  <DialogHeader>
    <DialogTitle className="text-xl font-bold">Profile</DialogTitle>
    <DialogDescription className="text-sm text-muted-foreground">
      View and manage your profile settings.
    </DialogDescription>
  </DialogHeader>

  {/* Grid Container */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Profile Card */}
    <Card className="w-full shadow-sm border border-muted rounded-lg">
      <CardHeader>
        <CardTitle className="text-md font-bold">Profile Information</CardTitle>
      </CardHeader>
      <CardContent>
        {!isEditing ? (
          <UserProfileInfo {...profileData} />
        ) : (
          <form onSubmit={handleUpdateProfile} className="space-y-4">
            {/* Name */}
            <Input
              type="text"
              value={profileData.name}
              onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
              placeholder="Full Name"
            />
            {/* Email */}
            <Input
              type="email"
              value={profileData.email}
              onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
              placeholder="Email Address"
            />
            {/* Bio */}
            <Textarea
              value={profileData.bio || ''}
              onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
              placeholder="Tell us about yourself..."
            />
            {/* Avatar Upload */}
            <div className="flex items-center gap-2">
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
                id="avatar-upload"
              />
              <label htmlFor="avatar-upload">
                <Button variant="outline">Upload Avatar</Button>
              </label>
            </div>
            <Button type="submit">Save Changes</Button>
          </form>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </Button>
      </CardFooter>
    </Card>

    {/* Notification Settings */}
    <Card className="w-full shadow-sm border border-muted rounded-lg">
      <CardHeader>
        <CardTitle className="text-md font-bold">Notification Preferences</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">Enable race updates and predictions.</p>
        <Switch
          checked={notificationsEnabled}
          onCheckedChange={() => setNotificationsEnabled(!notificationsEnabled)}
        />
      </CardContent>
    </Card>

    {/* Recent Activity */}
    <Card className="w-full shadow-sm border border-muted rounded-lg">
      <CardHeader>
        <CardTitle className="text-md font-bold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm">
          {activityLogs.map((log, index) => (
            <li key={index} className="flex justify-between text-muted-foreground">
              <span>{log.action}</span>
              <span className="text-xs">{log.time}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>

    {/* Change Password */}
    <Card className="w-full shadow-sm border border-muted rounded-lg">
      <CardHeader>
        <CardTitle className="text-md font-bold">Change Password</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="outline" className="w-full">
          Change Password
        </Button>
      </CardContent>
    </Card>
  </div>
</DialogContent>

    </Dialog>
  )
}

export default Profile
