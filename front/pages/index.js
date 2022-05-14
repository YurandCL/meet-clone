import UserVideo from "components/userVideo";

export default function Home() {
  return (
    <>
      <h1>Google Meet</h1>
      <form>
        Name: <input type="text" name="name" />
        <button id="join">Join</button>
      </form>

      <p id='count'></p>
      <div id='container'>
        <div id='local'>
          <UserVideo />
        </div>
      </div>
    </>
  )
}
