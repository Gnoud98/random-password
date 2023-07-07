<?php


function create_shortcode_random_password()
{

    ob_start();

    ?>

    <link rel="stylesheet" type="text/css"
        href="<?php echo get_home_url() ?>/wp-content/plugins/kira-random-password/assets/css/style.css">

    <style>
        #remove-accent-form {
            --primary-color: #2a809c;
        }
    </style>
    <div id="random-pass">
        <div class="title">
            <?php _e('Trình tạo Mật khẩu Ngẫu nhiên', 'kira') ?>
        </div>
        <p class="sub-title">
            <?php _e('Hãy tạo mật khẩu mạnh và đủ an toàn để bảo vệ tài khoản trên mạng của bạn.', 'kira') ?>
        </p>

        <div class="box__input box__element kira-flex">
            <div class="box__input-content kira-flex">
                <input type="text" id="passwordInput" readonly>
                <span id="passwordStrength"></span>
                <button id="generateButton"></button>
            </div>

            <button id="copyButton">
                <?php _e('Sao chép', 'kira') ?>
            </button>
        </div>
        <div class="box__range box__element kira-flex">
            <span>
                <?php _e('Độ dài mật khẩu: ', 'kira') ?>
            </span>
            <span id="passwordLengthDisplay"></span>
            <div class="box__range-input kira-flex">
                <button id="decreaseButton"></button>
                <input type="range" id="passwordLengthInput" min="1" max="50" value="10">
                <button id="increaseButton"></button>
            </div>
        </div>
        <div class="box__character box__element kira-flex">
            <span>
                <?php _e(' Các ký tự sử dụng: ', 'kira') ?>
            </span>
            <div class="kira-flex">
                <div class="kira-form-group">
                    <input checked type="checkbox" id="uppercaseCheckbox">
                    <label for="uppercaseCheckbox">ABC</label>
                </div>
                <div class="kira-form-group">
                    <input checked type="checkbox" id="lowercaseCheckbox">
                    <label for="lowercaseCheckbox">abc</label>
                </div>
                <div class="kira-form-group">
                    <input checked type="checkbox" id="numbersCheckbox">
                    <label for="numbersCheckbox">123</label>
                </div>
                <div class="kira-form-group">
                    <input type="checkbox" id="symbolsCheckbox">
                    <label for="symbolsCheckbox">#$%</label>
                </div>
            </div>

        </div>
    </div>

    <script
        src="<?php echo get_home_url() ?>/wp-content/plugins/kira-random-password/assets/js/main.js">
        </script>
    <?php

    $html = ob_get_contents();

    ob_end_clean();

    return $html;
}

add_shortcode('kira_random_password', 'create_shortcode_random_password');