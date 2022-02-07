import { Feedback } from '../shared'
import personas from '../../shared/MockMentor';

export default function Seed() {
  return <Feedback personas={personas} />;
}
