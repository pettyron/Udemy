1. Create 3 new components: GameControl, Odd, Even
2. The GameControl component should have buttons to start and stop the game
3. When starting the game, an event (holding an incrementing number) should get emitted each second (interval)
4. The event should be listenable from outside the component
5. When stopping the game, no more events should get emitted (clear interval)
6. A new Odd component should get created for every odd number emitted, the same should happen for the Even component on even numbers
7. Simply output Odd - number or Even - number in the two components
8. Style the element holding your output text differently in both components