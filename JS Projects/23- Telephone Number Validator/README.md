<ol>
  <li>You should have an <strong>input</strong> element with an <strong>id</strong> of <strong>"user-input"</strong>.</li>
  <br/>

   <li>You should have a <strong>button</strong> element with an <strong>id</strong> of <strong>"check-btn"</strong>.</li>
  <br/>

   <li>You should have a <strong>button</strong> element with an <strong>id</strong> of <strong>"clear-btn"</strong>.</li>
  <br/>

   <li>You should have a <strong>div</strong>, <strong>span</strong> or <strong>p</strong> element with an <strong>id</strong> of <strong>"results-div"</strong>.</li>
  <br/>

  <li>When you click on the <strong>#check-btn</strong> element without entering a value into the <strong>#user-input</strong> element, an alert should appear with the text <strong>"Please provide a phone number"</strong>.</li>
  <br/>

  <li>When you click on the <strong>#clear-btn</strong> element, the content within the <strong>#results-div</strong> element should be removed.</li>
  <br/>

  <li>When the <strong>#user-input</strong> element contains <strong>1 555-555-5555</strong> and the <strong>#check-btn</strong> element is clicked, the <strong>#results-div</strong> element should contain the text <strong>"Valid US number: 1 555-555-5555"</strong>.</li>
  <br/>

  <li>When the <strong>#user-input</strong> element contains <strong>1 (555) 555-5555</strong> and the <strong>#check-btn</strong> element is clicked, the <strong>#results-div</strong> element should contain the text <strong>"Valid US number: 1 (555) 555-5555"</strong>.</li>
  <br/>

  <li>When the <strong>#user-input</strong> element contains <strong>5555555555</strong> and the <b>#check-btn</b> element is clicked, the <b>#results-div</b> element should contain the text <b>"Valid US number: 5555555555"</b>.</li>
  <br/>

  <li>When the <b>#user-input</b> element contains <b>555-555-5555</b> and the <b>#check-btn</b> element is clicked, the <b>#results-div</b> element should contain the text <b>"Valid US number: 555-555-5555"</b>.</li>
  <br/>

   <li>When the <b>#user-input</b> element contains <b>(555)555-5555</b> and the <b>#check-btn</b> element is clicked, the <b>#results-div</b> element should contain the text <b>"Valid US number: (555)555-5555"</b>.</li>
  <br/>

   <li>When the <b>#user-input</b> element contains <b>1(555)555-5555</b> and the <b> #check-btn</b> element is clicked, the <b>#results-div</b> element should contain the text <b>"Valid US number: 1(555)555-5555"</b>.</li>
  <br/>

   <li>When the <b>#user-input</b> element contains <b>555-5555</b> and the <b>#check-btn</b> element is clicked, the <b>#results-div</b> element should contain the text <b>"Invalid US number: 555-5555"</b>.</li>
  <br/>

   <li>When the <b>#user-input</b> element contains <b>5555555</b> and the <b>#check-btn</b> element is clicked, the <b>#results-div</b> element should contain the text <b>"Invalid US number: 5555555"</b>.</li>
  <br/>

   <li>When the <b>#user-input</b>  element contains <b>1 555)555-5555</b> and the <b>#check-btn</b> element is clicked, the <b>#results-div</b> element should contain the text <b>"Invalid US number: 1 555)555-5555"</b>.</li>
  <br/>

   <li>When the <b>#user-input</b> element contains <b>1 555 555 5555</b> and the <b>#check-btn</b> element is clicked, the <b>#results-div</b> element should contain the text <b>"Valid US number: 1 555 555 5555"</b>.</li>
  <br/>

   <li>When the <b>#user-input</b> element contains <b>1 456 789 4444</b> and the <b>#check-btn</b> element is clicked, the <b>#results-div</b> element should contain the text <b>"Valid US number: 1 456 789 4444"</b>.</li>
  <br/>

  <li>When <b>#user-input</b> contains <b>123**&!!asdf#</b> and <b>#check-btn</b> is clicked, <b>#results-div</b> should contain the text <b>"Invalid US number: 123**&!!asdf#"</b>.</li>
  <br/>

  <li>When the <b>#user-input</b> element contains <b>55555555</b> and the <b>#check-btn</b> element is clicked, the <b>#results-div</b> element should contain the text <b>"Invalid US number: 55555555"</b>.</li>
  <br/>

  <li>When the <b>#user-input</b> element contains <b>(6054756961)</b> and the <b>#check-btn</b> element is clicked, the <b>#results-div</b> element should contain the text <b>"Invalid US number: (6054756961)"</b>.</li>
  <br/>

  <li>When the <b>#user-input</b> element contains <b>2 (757) 622-7382</b> and the <b>#check-btn</b> element is clicked, the <b>#results-div</b> element should contain the text <b>"Invalid US number: 2 (757) 622-7382"</b>.</li>
  <br/>

  <li>When the <b>#user-input</b> element contains <b>0 (757) 622-7382</b> and the <b>#check-btn</b> element is clicked, the <b>#results-div</b> element should contain the text <b>"Invalid US number: 0 (757) 622-7382"</b>.</li>
  <br/>

  <li>When the <b>#user-input</b> element contains <b>-1 (757) 622-7382</b> and the <b>#check-btn</b> element is clicked, the <b>#results-div</b> element should contain the text <b>"Invalid US number: -1 (757) 622-7382"</b>.</li>
  <br/>

  <li>When the <b>#user-input</b> element contains <b>2 757 622-7382</b> and the <b>#check-btn</b> element is clicked, the <b>#results-div</b> element should contain the text <b>"Invalid US number: 2 757 622-7382"</b>.</li>
  <br/>

  <li>When the <b>#user-input</b> element contains <b>10 (757) 622-7382</b> and the <b>#check-btn</b> element is clicked, the <b>#results-div</b> element should contain the text <b>"Invalid US number: 10 (757) 622-7382"</b>.</li>
  <br/>

  <li>When the <b>#user-input</b> element contains <b>27576227382</b> and the <b>#check-btn</b> element is clicked, the <b>#results-div</b> element should contain the text <b>"Invalid US number: 27576227382"</b>.</li>
  <br/>

  <li>When the <b>#user-input</b> element contains <b>(275)76227382</b> and the <b>#check-btn</b> element is clicked, the <b>#results-div</b> element should contain the text <b>"Invalid US number: (275)76227382"</b>.</li>
  <br/>

  <li>When the <b>#user-input</b> element contains <b>2(757)6227382</b> and the <b>#check-btn</b> element is clicked, the <b>#results-div</b> element should contain the text <b>"Invalid US number: 2(757)6227382"</b>.</li>
  <br/>

  <li>When the <b>#user-input</b> element contains <b>2(757)622-7382</b> and the <b>#check-btn</b> element is clicked, the <b>#results-div</b> element should contain the text <b>"Invalid US number: 2(757)622-7382"</b>.</li>
  <br/>

  <li>When the <b>#user-input</b> element contains <b>555)-555-5555</b> and the <b>#check-btn</b> element is clicked, the <b>#results-div</b> element should contain the text <b>"Invalid US number: 555)-555-5555"</b>.</li>
  <br/>

  <li>When the <b>#user-input</b> element contains <b>(555-555-5555</b> and the <b>#check-btn</b> element is clicked, the <b>#results-div</b> element should contain the text <b>"Invalid US number: (555-555-5555"</b>.</li>
  <br/>

  <li>When <b>#user-input</b> contains <b>(555)5(55?)-5555</b> and <b>#check-btn</b> is clicked, <b>#results-div</b> should contain the text <b>"Invalid US number: (555)5(55?)-5555"</b>.</li>
  <br/>

  <li>When the <b>#user-input</b> element contains <b>55 55-55-555-5</b> and the <b>#check-btn</b>  element is clicked, the <b>#results-div</b> element should contain the text <b>"Invalid US number: 55 55-55-555-5"</b>.</li>
  <br/>

  <li>When the <b>#user-input</b> element contains <b>11 555-555-5555</b> and the <b>#check-btn</b> element is clicked, the <b>#results-div</b> element should contain the text <b>"Invalid US number: 11 555-555-5555"</b>.</li>
  <br/>
</ol>

`In the US, phone numbers can be formatted in many ways. Here are some examples of valid formats for US phone numbers:`

> 1 555-555-5555 <br/>
> 1 (555) 555-5555 <br/>
> 1(555)555-5555 <br/>
> 1 555 555 5555 <br/>
> 5555555555 <br/>
> 555-555-5555 <br/>
> (555)555-5555

`Note that the area code is required. Also, if the country code is provided, you must confirm that the country code is 1.`
