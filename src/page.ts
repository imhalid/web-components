export const page = `
<div>
    <h1>Web Components</h1>
    <div class="grid">
      <hello-world name="Halit" class="rotate90">
      Hello Slot
      <p>Named!!</p>
      <div>Div</div>
      </hello-world>

      <form>
      <div>
        <label for="cvc"
          >Enter your CVC
          <popup-info
            img="../public/sk-bush.png"
            data-text="Your card validation code (CVC) is an extra security feature — it is the last 3 or 4 numbers on the back of your card."
          ></popup-info
        ></label>
        <input type="text" id="cvc" />
      </div>
    </form>
    </div>
</div>
`;
