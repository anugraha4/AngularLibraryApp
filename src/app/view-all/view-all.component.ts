import { Component } from '@angular/core';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent {
books:any=[
  {
    "image":"https://images.routledge.com/common/jackets/crclarge/978082470/9780824709785.jpg",
    "title":"Global Librarianship",
    "author":"By Martin A. Kesselman",
    "discription":"Providing new insights into the role of librarianship in an age of socioeconomic, environmental, and political.",
    "releasedyear":"July 23, 2004"
  },
  {
    "image":"https://images.routledge.com/common/jackets/crclarge/978082470/9780824709662.jpg",
    "title":"Becoming a Digital Library",
    "author":"By Susan J. Barnes",
    "discription":"This excellent reference traces  been available day in and day out to users worldwide for more than a decade.",
    "releasedyear":"November 04, 2003"
  },
  {
    "image":"https://images.routledge.com/common/jackets/crclarge/978082478/9780824789718.jpg",
    "title":"Library Information Technology and Networks",
    "author":"By Charles Grosch",
    "discription":"Offers an historical perspective of the past 25 year processing systems according to their size and platform. ",
    "releasedyear":"November 15, 1994"
  },
  {
    "image":"https://images.routledge.com/common/jackets/crclarge/978082477/9780824778200.jpg",
    "title":"Designing Instruction for Library Users: A Practical Guide",
    "author":"By Marilla Svinicki",
    "discription":"This book discusses the principles of the theoretical framework needed for design decision-making.",
    "releasedyear":"November 24, 1987"
  },
  {
    "image":"https://images.routledge.com/common/jackets/crclarge/978082477/9780824775087.jpg",
    "title":"An Introduction to Information Science",
    "author":"By Roger Flynn",
    "discription":"This book comprises an introduction to information as an manipulated, retrieved, transmitted, and used. ",
    "releasedyear":"December 22, 1986"
  },
  {
    "image":"https://images.routledge.com/common/jackets/crclarge/978082477/9780824775049.jpg",
    "title":"Organizing Nonprint Materials, Second Edition",
    "author":"By Daily",
    "discription":"This book surveys the various methods of microcomputers both for storing nonprint items and keeping track of them.",
    "releasedyear":"August 15, 1986"
  },
  {
    "image":"https://images.routledge.com/common/jackets/crclarge/978082477/9780824771423.jpg",
    "title":"Effective Online Searching: A Basic Text",
    "author":"By Borgman",
    "discription":"This book focuses on searching and hands-on experience, which learn searching for their own use as well.",
    "releasedyear":"July 11, 1984"
  },
  {
    "image":"https://images.routledge.com/common/jackets/crclarge/978082478/9780824782979.jpg",
    "title":"Scientific and Technical Information Resources",
    "author":"By Subramanyam",
    "discription":"This book focuses on current practices in scientific and technical  characteristics and biographic.",
    "releasedyear":"March 01, 1981"
  },
  {
    "image":"https://images.routledge.com/common/jackets/crclarge/978082476/9780824769000.jpg",
    "title":"Furnishing the Library Interior",
    "author":"By Pierce",
    "discription":"This book discusses the selection, evaluation, and purchase of furniture and equipment for libraries.",
    "releasedyear":"January 01, 1980"
  },
  {
    "image":"https://images.routledge.com/common/jackets/crclarge/978082479/9780824794767.jpg",
    "title":"Manheimer's Cataloging and Classification, Revised and Expanded",
    "author":"By Jerry Saye",
    "discription":"This work has been revised and updated to include and the Library of Congress Classification Schedules. ",
    "releasedyear":"September 09, 1999"
  }

]
}
