import { Feedback } from '../shared';
import personas from '../../shared/MockSeed';

export default function Mentor() {
  return <Feedback personas={personas} userType="mentor" />;
}
