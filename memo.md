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

v-on:submit　はよく使われる表現だが、下記のように "@" で略すことができる

```
<form v-on:submit="addItem">
↓
<form @submit="addItem">
```

## v-bind
v-bind:class にオブジェクトを渡すことでクラスを動的に切り替えることができる

## v-bind:class="{done: todo.isDone}"
isDoneがtrueの場合、 class="done" をつける処理
省略形　v-bind: class →　:class

## v-if　と v-forの優先順位
v-forのほうが先に処理されるため、v-ifが実行されないので、一緒に使わないようにする

## 一括削除機能の仕組み

一括削除ボタンが押下されたときに、未完了のタスクをtodos配列に上書きされるようにしている

## LocalStorgでデータを永続化する

watchを使用するが、todosの変更は検知するが、各keyの変更については検知しないため、 deep watcherの仕組みを利用する。