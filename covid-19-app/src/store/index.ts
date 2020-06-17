import { createSlice, configureStore } from "@reduxjs/toolkit";

const TEMPLATE = {
  // TEMPLATE DE MODEL
  eventIdentifier: "EVENT IDENTIFIER",
  date: new Date().toISOString(),
  location: {
    coords: {
      accuracy: 10,
      altitude: 0,
      heading: 0,
      latitude: -19.7887725,
      longitude: -43.8941083,
      speed: 0,
    },
    mocked: false,
    timestamp: 1592364895696,
  },
  audioURI:
    "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous¢252FCovid19App-958a53a6-bccd-4334-973d-356864958168/Audio/recording-c05e2bf9-e765-4735-8985-d430b5dfeeca.m4a",
  videoURI:
    "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous¢252FCovid19App-958a53a6-bccd-4334-973d-356864958168/Camera/c05e2bf9-e765-4735-8985-d430b5dfeeca.mp4",
};

// CONTROLLER-LIKE
const eventSlice = createSlice({
  name: "events",
  initialState: {
    data: [], // EVENTS ARRAY
  },
  reducers: {
    // CONTROLLER-METHODS-LIKE
    addEvent: (state, { payload }) => {
      state.data.push(payload.event);
    },
  },
});

const store = configureStore({
  reducer: eventSlice.reducer,
});

export const { addEvent } = eventSlice.actions;

export default store;
