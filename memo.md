## ディレクティブ
"v-" からはじまるものを指す
ディレクティブとは、 DOM 要素に対して何かを実行することをライブラリに伝達する、マークアップ中の特別なトークンです。

引用
https://012-jp.vuejs.org/guide/directives.html

## v-on
v-on ディレクティブを使うことで、DOM イベントの購読、イベント発火時の JavaScript の実行が可能になります。

引用
https://jp.vuejs.org/v2/guide/events.html

## v-on の省略形

v-on:submit　はよく使われる表現だが、下記のように略すことができる

```
<form v-on:submit="addItem">
↓
<form @submit="addItem">
```