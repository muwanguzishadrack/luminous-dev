<?php
$timezones = array_values(array_combine(timezone_identifiers_list(), timezone_identifiers_list()));

$zones = [];
foreach ($timezones as $timezone) {
    $zones[] = ['value' => $timezone, 'label' => $timezone];
}

$date_formats = [
    ['value' => 'Y-m-d', 'label' => date('Y-m-d')],
    ['value' => 'm/d/Y', 'label' => date('m/d/Y')],
    ['value' => 'd.m.Y', 'label' => date('d.m.Y')],
    ['value' => 'd-M-y', 'label' => date('d-M-y')],
    ['value' => 'F jS, Y', 'label' => date('F jS, Y')],
];

$time_formats = [
    ['value' => 'H:i', 'label' => date('H:i')],
    ['value' => 'h:i A', 'label' => date('h:i A')],
];

$countries = [
    ['value' => 'Afghanistan', 'label' => 'Afghanistan'],
    ['value' => 'Albania', 'label' => 'Albania'],
    ['value' => 'Algeria', 'label' => 'Algeria'],
    ['value' => 'Andorra', 'label' => 'Andorra'],
    ['value' => 'Angola', 'label' => 'Angola'],
    ['value' => 'Antigua and Barbuda', 'label' => 'Antigua and Barbuda'],
    ['value' => 'Argentina', 'label' => 'Argentina'],
    ['value' => 'Armenia', 'label' => 'Armenia'],
    ['value' => 'Australia', 'label' => 'Australia'],
    ['value' => 'Austria', 'label' => 'Austria'],
    ['value' => 'Azerbaijan', 'label' => 'Azerbaijan'],
    ['value' => 'Bahamas', 'label' => 'Bahamas'],
    ['value' => 'Bahrain', 'label' => 'Bahrain'],
    ['value' => 'Bangladesh', 'label' => 'Bangladesh'],
    ['value' => 'Barbados', 'label' => 'Barbados'],
    ['value' => 'Belarus', 'label' => 'Belarus'],
    ['value' => 'Belgium', 'label' => 'Belgium'],
    ['value' => 'Belize', 'label' => 'Belize'],
    ['value' => 'Benin', 'label' => 'Benin'],
    ['value' => 'Bhutan', 'label' => 'Bhutan'],
    ['value' => 'Bolivia', 'label' => 'Bolivia'],
    ['value' => 'Bosnia and Herzegovina', 'label' => 'Bosnia and Herzegovina'],
    ['value' => 'Botswana', 'label' => 'Botswana'],
    ['value' => 'Brazil', 'label' => 'Brazil'],
    ['value' => 'Brunei Darussalam', 'label' => 'Brunei Darussalam'],
    ['value' => 'Bulgaria', 'label' => 'Bulgaria'],
    ['value' => 'Burkina Faso', 'label' => 'Burkina Faso'],
    ['value' => 'Burundi', 'label' => 'Burundi'],
    ['value' => 'Cabo Verde', 'label' => 'Cabo Verde'],
    ['value' => 'Cambodia', 'label' => 'Cambodia'],
    ['value' => 'Cameroon', 'label' => 'Cameroon'],
    ['value' => 'Canada', 'label' => 'Canada'],
    ['value' => 'Central African Republic', 'label' => 'Central African Republic'],
    ['value' => 'Chad', 'label' => 'Chad'],
    ['value' => 'Chile', 'label' => 'Chile'],
    ['value' => 'China', 'label' => 'China'],
    ['value' => 'Colombia', 'label' => 'Colombia'],
    ['value' => 'Comoros', 'label' => 'Comoros'],
    ['value' => 'Congo', 'label' => 'Congo'],
    ['value' => 'Congo (Democratic Republic of the)', 'label' => 'Congo (Democratic Republic of the)'],
    ['value' => 'Costa Rica', 'label' => 'Costa Rica'],
    ['value' => 'Croatia', 'label' => 'Croatia'],
    ['value' => 'Cuba', 'label' => 'Cuba'],
    ['value' => 'Cyprus', 'label' => 'Cyprus'],
    ['value' => 'Czech Republic', 'label' => 'Czech Republic'],
    ['value' => 'Denmark', 'label' => 'Denmark'],
    ['value' => 'Djibouti', 'label' => 'Djibouti'],
    ['value' => 'Dominica', 'label' => 'Dominica'],
    ['value' => 'Dominican Republic', 'label' => 'Dominican Republic'],
    ['value' => 'Ecuador', 'label' => 'Ecuador'],
    ['value' => 'Egypt', 'label' => 'Egypt'],
    ['value' => 'El Salvador', 'label' => 'El Salvador'],
    ['value' => 'Equatorial Guinea', 'label' => 'Equatorial Guinea'],
    ['value' => 'Eritrea', 'label' => 'Eritrea'],
    ['value' => 'Estonia', 'label' => 'Estonia'],
    ['value' => 'Eswatini', 'label' => 'Eswatini'],
    ['value' => 'Ethiopia', 'label' => 'Ethiopia'],
    ['value' => 'Fiji', 'label' => 'Fiji'],
    ['value' => 'Finland', 'label' => 'Finland'],
    ['value' => 'France', 'label' => 'France'],
    ['value' => 'Gabon', 'label' => 'Gabon'],
    ['value' => 'Gambia', 'label' => 'Gambia'],
    ['value' => 'Georgia', 'label' => 'Georgia'],
    ['value' => 'Germany', 'label' => 'Germany'],
    ['value' => 'Ghana', 'label' => 'Ghana'],
    ['value' => 'Greece', 'label' => 'Greece'],
    ['value' => 'Grenada', 'label' => 'Grenada'],
    ['value' => 'Guatemala', 'label' => 'Guatemala'],
    ['value' => 'Guinea', 'label' => 'Guinea'],
    ['value' => 'Guinea-Bissau', 'label' => 'Guinea-Bissau'],
    ['value' => 'Guyana', 'label' => 'Guyana'],
    ['value' => 'Haiti', 'label' => 'Haiti'],
    ['value' => 'Honduras', 'label' => 'Honduras'],
    ['value' => 'Hungary', 'label' => 'Hungary'],
    ['value' => 'Iceland', 'label' => 'Iceland'],
    ['value' => 'India', 'label' => 'India'],
    ['value' => 'Indonesia', 'label' => 'Indonesia'],
    ['value' => 'Iran', 'label' => 'Iran'],
    ['value' => 'Iraq', 'label' => 'Iraq'],
    ['value' => 'Ireland', 'label' => 'Ireland'],
    ['value' => 'Israel', 'label' => 'Israel'],
    ['value' => 'Italy', 'label' => 'Italy'],
    ['value' => 'Jamaica', 'label' => 'Jamaica'],
    ['value' => 'Japan', 'label' => 'Japan'],
    ['value' => 'Jordan', 'label' => 'Jordan'],
    ['value' => 'Kazakhstan', 'label' => 'Kazakhstan'],
    ['value' => 'Kenya', 'label' => 'Kenya'],
    ['value' => 'Kiribati', 'label' => 'Kiribati'],
    ['value' => 'Korea (Democratic People\'s Republic of)', 'label' => 'Korea (Democratic People\'s Republic of)'],
    ['value' => 'Korea (Republic of)', 'label' => 'Korea (Republic of)'],
    ['value' => 'Kuwait', 'label' => 'Kuwait'],
    ['value' => 'Kyrgyzstan', 'label' => 'Kyrgyzstan'],
    ['value' => 'Lao People\'s Democratic Republic', 'label' => 'Lao People\'s Democratic Republic'],
    ['value' => 'Latvia', 'label' => 'Latvia'],
    ['value' => 'Lebanon', 'label' => 'Lebanon'],
    ['value' => 'Lesotho', 'label' => 'Lesotho'],
    ['value' => 'Liberia', 'label' => 'Liberia'],
    ['value' => 'Libya', 'label' => 'Libya'],
    ['value' => 'Liechtenstein', 'label' => 'Liechtenstein'],
    ['value' => 'Lithuania', 'label' => 'Lithuania'],
    ['value' => 'Luxembourg', 'label' => 'Luxembourg'],
    ['value' => 'Madagascar', 'label' => 'Madagascar'],
    ['value' => 'Malawi', 'label' => 'Malawi'],
    ['value' => 'Malaysia', 'label' => 'Malaysia'],
    ['value' => 'Maldives', 'label' => 'Maldives'],
    ['value' => 'Mali', 'label' => 'Mali'],
    ['value' => 'Malta', 'label' => 'Malta'],
    ['value' => 'Marshall Islands', 'label' => 'Marshall Islands'],
    ['value' => 'Mauritania', 'label' => 'Mauritania'],
    ['value' => 'Mauritius', 'label' => 'Mauritius'],
    ['value' => 'Mexico', 'label' => 'Mexico'],
    ['value' => 'Micronesia (Federated States of)', 'label' => 'Micronesia (Federated States of)'],
    ['value' => 'Moldova (Republic of)', 'label' => 'Moldova (Republic of)'],
    ['value' => 'Monaco', 'label' => 'Monaco'],
    ['value' => 'Mongolia', 'label' => 'Mongolia'],
    ['value' => 'Montenegro', 'label' => 'Montenegro'],
    ['value' => 'Morocco', 'label' => 'Morocco'],
    ['value' => 'Mozambique', 'label' => 'Mozambique'],
    ['value' => 'Myanmar', 'label' => 'Myanmar'],
    ['value' => 'Namibia', 'label' => 'Namibia'],
    ['value' => 'Nauru', 'label' => 'Nauru'],
    ['value' => 'Nepal', 'label' => 'Nepal'],
    ['value' => 'Netherlands', 'label' => 'Netherlands'],
    ['value' => 'New Zealand', 'label' => 'New Zealand'],
    ['value' => 'Nicaragua', 'label' => 'Nicaragua'],
    ['value' => 'Niger', 'label' => 'Niger'],
    ['value' => 'Nigeria', 'label' => 'Nigeria'],
    ['value' => 'North Macedonia', 'label' => 'North Macedonia'],
    ['value' => 'Norway', 'label' => 'Norway'],
    ['value' => 'Oman', 'label' => 'Oman'],
    ['value' => 'Pakistan', 'label' => 'Pakistan'],
    ['value' => 'Palau', 'label' => 'Palau'],
    ['value' => 'Panama', 'label' => 'Panama'],
    ['value' => 'Papua New Guinea', 'label' => 'Papua New Guinea'],
    ['value' => 'Paraguay', 'label' => 'Paraguay'],
    ['value' => 'Peru', 'label' => 'Peru'],
    ['value' => 'Philippines', 'label' => 'Philippines'],
    ['value' => 'Poland', 'label' => 'Poland'],
    ['value' => 'Portugal', 'label' => 'Portugal'],
    ['value' => 'Qatar', 'label' => 'Qatar'],
    ['value' => 'Romania', 'label' => 'Romania'],
    ['value' => 'Russian Federation', 'label' => 'Russian Federation'],
    ['value' => 'Rwanda', 'label' => 'Rwanda'],
    ['value' => 'Saint Kitts and Nevis', 'label' => 'Saint Kitts and Nevis'],
    ['value' => 'Saint Lucia', 'label' => 'Saint Lucia'],
    ['value' => 'Saint Vincent and the Grenadines', 'label' => 'Saint Vincent and the Grenadines'],
    ['value' => 'Samoa', 'label' => 'Samoa'],
    ['value' => 'San Marino', 'label' => 'San Marino'],
    ['value' => 'Sao Tome and Principe', 'label' => 'Sao Tome and Principe'],
    ['value' => 'Saudi Arabia', 'label' => 'Saudi Arabia'],
    ['value' => 'Senegal', 'label' => 'Senegal'],
    ['value' => 'Serbia', 'label' => 'Serbia'],
    ['value' => 'Seychelles', 'label' => 'Seychelles'],
    ['value' => 'Sierra Leone', 'label' => 'Sierra Leone'],
    ['value' => 'Singapore', 'label' => 'Singapore'],
    ['value' => 'Slovakia', 'label' => 'Slovakia'],
    ['value' => 'Slovenia', 'label' => 'Slovenia'],
    ['value' => 'Solomon Islands', 'label' => 'Solomon Islands'],
    ['value' => 'Somalia', 'label' => 'Somalia'],
    ['value' => 'South Africa', 'label' => 'South Africa'],
    ['value' => 'South Sudan', 'label' => 'South Sudan'],
    ['value' => 'Spain', 'label' => 'Spain'],
    ['value' => 'Sri Lanka', 'label' => 'Sri Lanka'],
    ['value' => 'Sudan', 'label' => 'Sudan'],
    ['value' => 'Suriname', 'label' => 'Suriname'],
    ['value' => 'Sweden', 'label' => 'Sweden'],
    ['value' => 'Switzerland', 'label' => 'Switzerland'],
    ['value' => 'Syrian Arab Republic', 'label' => 'Syrian Arab Republic'],
    ['value' => 'Tajikistan', 'label' => 'Tajikistan'],
    ['value' => 'Tanzania (United Republic of)', 'label' => 'Tanzania (United Republic of)'],
    ['value' => 'Thailand', 'label' => 'Thailand'],
    ['value' => 'Timor-Leste', 'label' => 'Timor-Leste'],
    ['value' => 'Togo', 'label' => 'Togo'],
    ['value' => 'Tonga', 'label' => 'Tonga'],
    ['value' => 'Trinidad and Tobago', 'label' => 'Trinidad and Tobago'],
    ['value' => 'Tunisia', 'label' => 'Tunisia'],
    ['value' => 'Turkey', 'label' => 'Turkey'],
    ['value' => 'Turkmenistan', 'label' => 'Turkmenistan'],
    ['value' => 'Tuvalu', 'label' => 'Tuvalu'],
    ['value' => 'Uganda', 'label' => 'Uganda'],
    ['value' => 'Ukraine', 'label' => 'Ukraine'],
    ['value' => 'United Arab Emirates', 'label' => 'United Arab Emirates'],
    ['value' => 'United Kingdom', 'label' => 'United Kingdom'],
    ['value' => 'United States of America', 'label' => 'United States of America'],
    ['value' => 'Uruguay', 'label' => 'Uruguay'],
    ['value' => 'Uzbekistan', 'label' => 'Uzbekistan'],
    ['value' => 'Vanuatu', 'label' => 'Vanuatu'],
    ['value' => 'Venezuela (Bolivarian Republic of)', 'label' => 'Venezuela (Bolivarian Republic of)'],
    ['value' => 'Viet Nam', 'label' => 'Viet Nam'],
    ['value' => 'Yemen', 'label' => 'Yemen'],
    ['value' => 'Zambia', 'label' => 'Zambia'],
    ['value' => 'Zimbabwe', 'label' => 'Zimbabwe'],
];

$placeholders = [
    ['value' => '{first_name}', 'label' => 'First name'],
    ['value' => '{last_name}', 'label' => 'Last name'],
    ['value' => '{full_name}', 'label' => 'Full name'],
    ['value' => '{email}', 'label' => 'Email'],
    ['value' => '{phone}', 'label' => 'Phone'],
    ['value' => '{group}', 'label' => 'Group'],
    ['value' => '{organization_name}', 'label' => 'Organization name'],
    ['value' => '{full_address}', 'label' => 'Address'],
    ['value' => '{street}', 'label' => 'Street'],
    ['value' => '{city}', 'label' => 'City'],
    ['value' => '{state}', 'label' => 'State'],
    ['value' => '{zip_code}', 'label' => 'Zip code'],
    ['value' => '{country}', 'label' => 'Country'],
];

return [
    'timezones' => $zones,
    'countries' => $countries,
    'date_formats' => $date_formats,
    'time_formats' => $time_formats,
    'placeholders' => $placeholders
];