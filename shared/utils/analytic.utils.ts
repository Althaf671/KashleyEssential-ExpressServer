// Token generator
import jwt from 'jsonwebtoken';

import { env } from '../../infra/config/env';
import { TEventTrackingPayload, TPageviewsPayload, TVisitorTrackingPayload } from '../../models/types';

// Event tracking token
export function generateEventTrackingToken(payload: TEventTrackingPayload) {
    
};

// Pageviews token
export function generatePageviewsToken(payload: TPageviewsPayload) {

};

// visitor tracking token
export function generateVisitorTrackingToken(payload: TVisitorTrackingPayload) {

};