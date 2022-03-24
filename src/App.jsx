import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLoginView from 'view/LoginView/AdminLoginView/AdminLoginView';
import AdminOTPVerfiyView from 'view/LoginView/AdminOTPVerifyView/AdminOTPVerifyView';
import HomeView from 'view/HomeView/HomeView';
import UsersView from 'view/UsersView/UsersView';
import WhitelistedUsersList from 'components/WhiteListedUsersList/WhitelistedUsersList';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index path="/login" element={<AdminLoginView />} />
          <Route index path="/otpVerify" element={<AdminOTPVerfiyView />} />
          <Route path="/home" element={<HomeView />}>
            <Route path="users" element={<UsersView />}>
              <Route index path="whitelist" element={<WhitelistedUsersList />} />
              <Route index path="active-members" element={<span>Active Members</span>} />
              <Route index path="waitlisted" element={<span>Waitlisted</span>} />
            </Route>
            <Route path="dashboard" element={<span>Dashboard</span>} />
            <Route path="events" element={<span>Events</span>} />
            <Route path="mentors" element={<span>Mentors</span>} />
          </Route>
          <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
