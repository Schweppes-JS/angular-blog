import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateInterface } from "../../shared/types/appState.interface";
import { UserProfileStateInterface } from "../types/userProfileState.interface";

export const userProfileFeatureSelector = createFeatureSelector<AppStateInterface, UserProfileStateInterface>('userProfile');

export const isLoadingSelector = createSelector(userProfileFeatureSelector, (userProfile: UserProfileStateInterface) => userProfile.isLoading);

export const errorSelector = createSelector(userProfileFeatureSelector, (userProfile: UserProfileStateInterface) => userProfile.error);

export const userProfileSelector = createSelector(userProfileFeatureSelector, (userProfile: UserProfileStateInterface) => userProfile.data);