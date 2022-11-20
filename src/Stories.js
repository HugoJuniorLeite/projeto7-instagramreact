import Storie from "./Storie";

const storie = [
  { image: "assets/img/9gag.svg", user: "9gag" },
  { image: "assets/img/meowed.svg", user: "meowed" },
  { image: "assets/img/barked.svg", user: "barked" },
  {
    image: "assets/img/nathanwpylestrangeplanet.svg",
    user: "nathanwpylestrangeplanet",
  },
  { image: "assets/img/wawawicomics.svg", user: "wawawicomics" },
  { image: "assets/img/respondeai.svg", user: "respondeai" },
  { image: "assets/img/filomoderna.svg", user: "filomoderna" },
  { image: "assets/img/memeriagourmet.svg", user: "memeriagourmet" },
];

export default function Stories() {
  const newStorie = storie.map((s) => <Storie image={s.image} user={s.user} />);
  console.log(newStorie);
  return (
    <>
      <div className="stories">
        {newStorie}
        <div className="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    </>
  );
}
