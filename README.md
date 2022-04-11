![test-ello-challenge](https://github.com/JayKay24/ElloAssignment/actions/workflows/test-ello-challenge.yaml/badge.svg)

# Ello - Full Stack Engineer coding challenge assignment

## Challenge

In this code challenge you will build a ReactJS web app from the ground up. You have to setup a GraphQL client to query our GraphQL API endpoint https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql. The API will return a book object. You can learn more about GraphQL here https://graphql.org/learn/.

The book has a field called pages which is an array of page objects. The page objects contain a field called content which is the page text and another field called tokens which is an array of tokenized page text.

For example page content might look like this:

```
"A cow has 4 legs."
```

and the `tokens` for this for this `content` looks like this

```
[
{
  "position": [
    1,
    2
  ],
  "value": "a"
},
{
  "position": [
    3,
    6
  ],
  "value": "cow"
},
{
  "position": [
    7,
    10
  ],
  "value": "has"
},
{
  "position": [
    11,
    12
  ],
  "value": "four"
},
{
  "position": [
    13,
    17
  ],
  "value": "legs"
}
]
```

`position` is an array containing the start and end index of a word.

### Challenge 1

The first task will be to map the `tokens` to the page `content`, and represent it in a view. The view should show the page `content` in its original format. The words should be clickable and when clicked they should take us to a second view which will display the token `value`. E.g If I click `4` in "A cow has 4 legs." It should open another view and pass `four` from the `tokens` array to that view.

Make sure to make the text large enough to be clickable. Also take into account how punctuation will react when the text is wrapped, i.e if `"A cow has 4 legs."` is wrapped the `"` should still be next to the `A`. They should not end up on different lines, even if we resize the screen.

### Challenge 2

Create a user interface for the book. It should show the left and right pages on a single view, there should be some navigation button that will allow a user to move to the next double page. This should work in tandem with Challenge 1, i.e. The content on each page should be clickable. Please note that some pages might have no content and that is okay; just show a blank page. The UI doesn't have to be complex. Avoid CSS frameworks.

---
