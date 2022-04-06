import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLoginView from 'view/LoginView/AdminLoginView/AdminLoginView';
import AdminForgotPasswordView from 'view/LoginView/AdminForgotPasswordView/AdminForgotPasswordView';
import HomeView from 'view/HomeView/HomeView';
import UsersView from 'view/UsersView/UsersView';
import EventsView from 'view/EventsView/EventsView';
import WhitelistedUsersList from 'components/Users/WhiteListedUsersList/WhitelistedUsersList';
import WaitlistedUsersList from 'components/Users/WaitlistedUsersList/WaitlistedUsers';
import ActiveUsersList from 'components/Users/ActiveUsersList/ActiveUsersList';
import UpcomingEvents from 'components/Events/Upcoming/Upcoming';
import PastEvents from 'components/Events/Past/Past';
function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
            <Route index path="/login" element={<AdminLoginView />} />
            <Route index path="/forgotPassword" element={<AdminForgotPasswordView />} />
            <Route path="/home" element={<HomeView />}>
              <Route path="users" element={<UsersView />}>
                <Route index path="whitelist" element={<WhitelistedUsersList />} />
                <Route path="active-members" element={<ActiveUsersList />} />
                <Route path="waitlisted" element={<WaitlistedUsersList />} />
              </Route>
              <Route path="cohorts" element={<span>Cohorts</span>} />
              <Route path="events" element={<EventsView />}>
                <Route index path="upcoming" element={<UpcomingEvents />} />
                <Route index path="past" element={<PastEvents />} />
              </Route>
              <Route path="mentors" element={<span>Mentors</span>} />
              <Route path="content-hub" element={<span>Content Hub</span>} />
            </Route>
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  )
}

export default App;
