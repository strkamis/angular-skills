import { Component, OnInit, Input } from "@angular/core";
import { FakeApiService } from "src/app/fake-api.service";
import { LikesService } from "../../likes.service";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input() card: any;

  constructor(private likeService: LikesService) {}

  ngOnInit() {}

  // TODO: incrementar o like, salvar via rest
  onLike() {
    this.likeService.incrementLikes(this.card, this.card.id).subscribe(
      (res) => {
        this.card.like = res.likes;
      },

      (error) => {
        console.error("Error incrementing likes:", error);
      }
    );
  }

  //troca de cor
  getColor() {
    if (this.card.likes >= 10) {
      return "green";
    } else if (this.card.likes >= 5) {
      return "blue";
    }
    return "black";
  }

  // TODO: abrir o link do seu linkedin
  onShare() {
    window.open ('https://www.linkedin.com/in/kamila-bezerra-da-silva-7a624a16a/', '_blank');
  }
}
