
import { merge } from 'lodash';
import AstronauteResolver from './resolvers/astronautes';
import PlanetResolver from './resolvers/planet';

export const resolvers = merge(AstronauteResolver, PlanetResolver);