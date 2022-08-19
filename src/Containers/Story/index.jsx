import { StorySection, InnerContainer } from './styles';
import { TextSplitFade } from '../../Animations';
export default function StoryContainer() {
  return (
    <StorySection>
      <InnerContainer>
        <TextSplitFade target={'story'}>
          <p id='split-story'>
            We don’t care just about design. We care about you.
          </p>
        </TextSplitFade>
      </InnerContainer>
    </StorySection>
  );
}
