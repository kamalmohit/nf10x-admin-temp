import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLoginView from 'view/LoginView/AdminLoginView/AdminLoginView';
import AdminForgotPasswordView from 'view/LoginView/AdminForgotPasswordView/AdminForgotPasswordView';
import HomeView from 'view/HomeView/HomeView';
import UsersView from 'view/UsersView/UsersView';
import EventsView from 'view/EventsView/EventsView';
import CohortsView from 'view/CohortsView/CohortsView';
import MentorsView from 'view/MentorsView/MentorsView';
import LoadingComponent from 'components/LoadingComponent/LoadingComponent';
import WhitelistedUsersList from 'components/Users/WhiteListedUsersList/WhitelistedUsersList';
import WaitlistedUsersList from 'components/Users/WaitlistedUsersList/WaitlistedUsers';
import ActiveUsersList from 'components/Users/ActiveUsersList/ActiveUsersList';
import UpcomingEvents from 'components/Events/Upcoming/Upcoming';
import PastEvents from 'components/Events/Past/Past';
import AllCohorts from 'components/Cohorts/AllCohorts/AllCohorts';
import CohortDetails from 'components/Cohorts/CohortDetails/CohortDetails';
import InvitedCohorts from 'components/Cohorts/InvitedCohorts/InvitedCohorts';
import GroupACohorts from 'components/Cohorts/GroupA/GroupA';
import GroupBCohorts from 'components/Cohorts/GroupB/GroupB';
function App() {
  return (
    <React.Suspense fallback={<LoadingComponent />}>
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
              <Route path="cohorts" element={<CohortsView />}>
                <Route index path="all-cohorts" element={<AllCohorts />} />
                <Route path=":cohortId" element={<CohortDetails />}>
                  <Route index path="invited" element={<InvitedCohorts />} />
                  <Route path="group-a" element={<GroupACohorts />} />
                  <Route path="group-b" element={<GroupBCohorts />} />
                </Route>
              </Route>
              <Route path="events" element={<EventsView />}>
                <Route index path="upcoming" element={<UpcomingEvents />} />
                <Route path="past" element={<PastEvents />} />
              </Route>
              <Route path="mentors" element={<MentorsView />} />
              <Route path="content-hub" element={<span>Content Hub</span>} />
            </Route>
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  )
}

export default App;
